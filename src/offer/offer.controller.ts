import { Controller, NotFoundException ,HttpStatus,  Get, Post, Put, Delete, Body, Param, Res, Query } from '@nestjs/common';
import { OfferDto } from "./dto/offer.dto";
import { OfferService } from "./offer.service";
import { Offer } from './models/offer.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('offer')
@ApiTags('Offer')
export class OfferController {
    constructor(private readonly offerService: 
        OfferService){}

    @Post()
    async createOffer(@Res() res, @Body() offerDto: 
    OfferDto): Promise<Offer>{
        const offer = await this.offerService.createOffer(offerDto);
        return res.status(HttpStatus.OK).json({
            message: 'Offer Successfully Created',
            offer
        });
    }

    @Get()
    async getOffers(@Res() res, @Query('tags') tags?: string):Promise<Offer[]>{
        if(tags) {
            const offers = await this.offerService.getOffersByTags(tags);
            if(!offers){
                throw new NotFoundException('Does not exist any offer with those tags.');
            }
            return res.status(HttpStatus.OK).json({
                offers
            });
        }
        const offers = await this.offerService.getOffers();
        return res.status(HttpStatus.OK).json({
            offers
        });
    }

    @Get(':id')
    async getOffer(@Res() res, @Param('id') offerID: string):Promise<Offer> {
        const offer = 
        await this.offerService.getOffer(offerID);

        if(!offer){
            throw new NotFoundException('Offer does not exist');
        }

        return res.status(HttpStatus.OK).json({
            offer
        });
    }

    @Delete(':id')
    async deleteOffer(@Res() res, 
    @Param('id') offerID: string):Promise<Offer>{
        const offerDeleted = await this.offerService.deleteOffer(offerID);
        if(!offerDeleted){
            throw new NotFoundException('Offer does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Offer Deleted Successfully',
            offer: offerDeleted
        });
    }

    @Put(':id')
    async updateOffer(@Res() res, 
    @Body() offerDto: OfferDto,
    @Param('id') offerID: string):Promise<Offer>{
    const updatedOffer = await this.offerService.updateOffer(offerID, offerDto);
    if(!updatedOffer){
        throw new NotFoundException('Offer does not exist');
    }
    return res.status(HttpStatus.OK).json({
        message: 'Offer Updated Successfully',
        offer: updatedOffer
    });
    }
}
