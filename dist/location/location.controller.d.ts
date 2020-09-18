import { LocationService } from './location.service';
import { LocationDto } from './dto/location.dto';
import { Location } from './models/location.model';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    createLocation(res: any, locationDto: LocationDto): Promise<Location>;
    getLocations(res: any): Promise<Location[]>;
    getLocation(res: any, locatioID: string): Promise<Location>;
    deleteLocation(res: any, locatioID: string): Promise<Location>;
    updateLocation(res: any, locationDto: LocationDto, locationID: string): Promise<Location>;
}
