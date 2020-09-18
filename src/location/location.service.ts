import { Injectable, ConflictException, Inject, forwardRef } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { LocationDto } from './dto/location.dto';
import { Location } from './models/location.model';
import { InjectModel } from 'nestjs-typegoose';
import { OfferService } from '../offer/offer.service';
import { Offer } from '../offer/models/offer.model';
import { ObjectId } from 'bson';

@Injectable()
export class LocationService {
    constructor(
        @InjectModel(Location) private readonly locationModel: ReturnModelType <typeof Location>,
        @Inject(forwardRef(() =>OfferService))
        private readonly offerService: OfferService
    ){}
     
     async getLocations(): Promise<Location[]>{
        const locations = await this.locationModel.find({active: true });
        return locations;
    }

    async getLocation(locationId: string ): Promise<Location>{
        const location = await this.locationModel.findById(locationId);
        return location;
    }

   async createLocation(locationDto: LocationDto): 
    Promise<Location>{
        const location = await new this.locationModel(locationDto);
        return await location.save();
    }

    async deleteLocation(locationId: string): Promise<Location>{
        const offers: Offer[] = (await this.offerService.getOffers()).filter(
            x => x.tags.includes(new ObjectId(locationId)));

        if(offers.length > 0){
            throw new ConflictException ("Location is been used");
        }
        const deletedLocation = await this.locationModel.findByIdAndUpdate(locationId, { active: false }, { new: true })
        .exec();
        return deletedLocation;
    }

    async updateLocation(locationId: string, locationDto: LocationDto): Promise<Location>{
        const updatedLocation = await this.locationModel.findByIdAndUpdate(locationId, locationDto,{new: true}).exec();
        return updatedLocation;
    }
}
