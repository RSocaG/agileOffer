import { Ref } from "@typegoose/typegoose";
import { Offer } from "../../offer/models/offer.model";
export declare class Company {
    id?: string;
    name: string;
    relatedImage: string;
    active?: boolean;
    offers: Array<Ref<Offer>>;
}
