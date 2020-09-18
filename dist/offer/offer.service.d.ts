import { Offer } from './models/offer.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { OfferDto } from './dto/offer.dto';
import { TagService } from '../tag/tag.service';
import { LocationService } from '../location/location.service';
import { CompanyService } from '../company/company.service';
export declare class OfferService {
    private readonly offerModel;
    private readonly tagService;
    private readonly locationService;
    private readonly companyService;
    constructor(offerModel: ReturnModelType<typeof Offer>, tagService: TagService, locationService: LocationService, companyService: CompanyService);
    getOffers(): Promise<Offer[]>;
    getOffersByTags(tags: string): Promise<Offer[]>;
    getOffer(offerId: string): Promise<Offer>;
    createOffer(offerDto: OfferDto): Promise<Offer>;
    deleteOffer(offerId: string): Promise<Offer>;
    updateOffer(offerId: string, offerDto: OfferDto): Promise<Offer>;
    private insertDelayToOffers;
    private insertDelayToOffer;
}
