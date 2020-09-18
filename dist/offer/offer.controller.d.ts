import { OfferDto } from "./dto/offer.dto";
import { OfferService } from "./offer.service";
import { Offer } from './models/offer.model';
export declare class OfferController {
    private readonly offerService;
    constructor(offerService: OfferService);
    createOffer(res: any, offerDto: OfferDto): Promise<Offer>;
    getOffers(res: any, tags?: string): Promise<Offer[]>;
    getOffer(res: any, offerID: string): Promise<Offer>;
    deleteOffer(res: any, offerID: string): Promise<Offer>;
    updateOffer(res: any, offerDto: OfferDto, offerID: string): Promise<Offer>;
}
