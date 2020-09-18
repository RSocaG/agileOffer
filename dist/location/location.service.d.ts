import { ReturnModelType } from '@typegoose/typegoose';
import { LocationDto } from './dto/location.dto';
import { Location } from './models/location.model';
import { OfferService } from '../offer/offer.service';
export declare class LocationService {
    private readonly locationModel;
    private readonly offerService;
    constructor(locationModel: ReturnModelType<typeof Location>, offerService: OfferService);
    getLocations(): Promise<Location[]>;
    getLocation(locationId: string): Promise<Location>;
    createLocation(locationDto: LocationDto): Promise<Location>;
    deleteLocation(locationId: string): Promise<Location>;
    updateLocation(locationId: string, locationDto: LocationDto): Promise<Location>;
}
