import { prop, Ref, arrayProp} from "@typegoose/typegoose";
import { Offer } from "../../offer/models/offer.model";

export class Company{
    id?: string;

    @prop()
    name: string;

    @prop()
    relatedImage: string;

    @prop({default: true})
    active?: boolean;

    @prop({itemsRef: Offer})
    offers: Array<Ref<Offer>>;
}