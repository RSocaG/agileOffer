import { Controller, Post, Res, Body, HttpStatus, Get, Param, Delete, NotFoundException, Put } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';
import { Location } from './models/location.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('location')
@ApiTags('Location')
export class LocationController {
    constructor(private readonly locationService: 
        LocationService){}

    @Post()
    async createLocation(@Res() res, @Body() locationDto: 
    LocationDto): Promise<Location>{
        const location = await this.locationService.createLocation(locationDto);
        return res.status(HttpStatus.OK).json({
            message: 'Location Successfully Created',
            location
        });
    }

    @Get()
    async getLocations(@Res() res):Promise<Location[]>{
        const locations = await this.locationService.getLocations();
        return res.status(HttpStatus.OK).json({
            locations
        });
    }

    @Get(':id')
    async getLocation(@Res() res, @Param('id') locatioID: string):Promise<Location> {
        const location = 
        await this.locationService.getLocation(locatioID);

        if(!location){
            throw new NotFoundException('Location does not exist');
        }

        return res.status(HttpStatus.OK).json({
            location
        });
    }


    @Delete(':id')
    async deleteLocation(@Res() res, 
    @Param('id') locatioID: string):Promise<Location>{

        const locationDeleted = await this.locationService.deleteLocation(locatioID);
        
        if(!locationDeleted){
            throw new NotFoundException('Location does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Location Deleted Successfully',
            location: locationDeleted
        });
    }

    @Put(':id')
    async updateLocation(@Res() res, 
    @Body() locationDto: LocationDto,
    @Param('id') locationID: string): Promise<Location>{
    const updatedLocation = await this.locationService.updateLocation(locationID, LocationDto);
    if(!updatedLocation){
        throw new NotFoundException('Location does not exist');
    }
    return res.status(HttpStatus.OK).json({
        message: 'Location Updated Successfully',
        location: updatedLocation
    });
    }
}
