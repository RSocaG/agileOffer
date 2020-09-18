import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectModel } from "nestjs-typegoose";
import { Offer } from './models/offer.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { OfferDto } from './dto/offer.dto';
import { TagService } from '../tag/tag.service';
import { LocationService } from '../location/location.service';
import { ObjectId, ObjectID } from 'bson';
import { CompanyService } from '../company/company.service';

@Injectable()
export class OfferService {
	constructor(
        @InjectModel(Offer) private readonly offerModel: ReturnModelType <typeof Offer>,
        private readonly tagService: TagService,
        @Inject(forwardRef(() =>LocationService))
        private readonly locationService: LocationService,
        private readonly companyService: CompanyService
    ){}
     
     async getOffers(): Promise<Offer[]>{
        const offers: Offer[] = await this.offerModel.find({active: true }).sort({createdAt: -1});
        return this.insertDelayToOffers(offers);
    }

    async getOffersByTags(tags: string): Promise<Offer[]>{
        const tagsList: string[] = tags.split("%");

        const offers: Offer[] =  await this.offerModel.find({
            active: true,
            tags: {$all:tagsList}
        }).sort({createdAt: -1});

        return this.insertDelayToOffers(offers);
    }

    async getOffer(offerId: string ): Promise<Offer>{
        const offer = await this.offerModel.findById(offerId);
        return this.insertDelayToOffer(offer);
    }

   async createOffer(offerDto: OfferDto): 
    Promise<Offer>{
        
        if(offerDto.location){
            try {
                const _ = new ObjectId(offerDto.location);
            } catch (error) {
                const locationId = await this.locationService.createLocation({name: offerDto.location});
                offerDto.location = locationId.id;              
            }
        }

        if(offerDto.tags.length > 0)
        {
            for(let i = 0; i < offerDto.tags.length; i++){
                const tag = offerDto.tags[i];
                try {
                    const _ = new ObjectId(tag);
                } catch (error) {
                    const tagId = await this.tagService.createTag({name: tag});
                    offerDto.tags[i] = tagId.id;              
                }
            };
        }

        const offer = await new this.offerModel(offerDto).save();
        await this.companyService.allocateOffer(offerDto.company, offer.id);

        return this.insertDelayToOffer(offer);
    }

    async deleteOffer(offerId: string): Promise<Offer>{
        const deletedOffer = await this.offerModel.findByIdAndUpdate(offerId, { active: false }, { new: true })
        .exec();
        return this.insertDelayToOffer(deletedOffer);
    }

    async updateOffer(offerId: string, offerDto: OfferDto): Promise<Offer>{
        const updatedOffer = await this.offerModel.findByIdAndUpdate(offerId, offerDto,{new: true}).exec();
        return this.insertDelayToOffer(updatedOffer);
    }

    private async insertDelayToOffers(offers : Offer[]): Promise<Offer[]>{
        for(let offer of offers) {
            offer = await this.insertDelayToOffer(offer);
        }
        return offers;
    }

    private async insertDelayToOffer(offer : Offer): Promise<Offer>{
        const difference = new Date().getTime() - offer.createdAt.getTime();
        const days = Math.round(difference/(60000*60*24));
        
        if (days < 7) {
            offer.delay = days>0?`${days}d`: "today";
            offer.new = offer.delay === "today" ? true : false;
        } else {
            offer.new = false;
            const weeks = Math.floor(days / 7);
            if(weeks < 4)
            {
                offer.delay = `${weeks}w`;
            }else{
                const month = Math.floor(weeks / 4);
                offer.delay = month<12?`${month}mo`: `${Math.floor(month/12)}y`;
            }
        }
       await this.offerModel.findByIdAndUpdate(offer.id, offer);
        return offer;
    }
}
