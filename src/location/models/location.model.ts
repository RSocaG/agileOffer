import { prop} from "@typegoose/typegoose";

export class Location{
    id?: string;

    @prop()
    name: string;
    
    @prop({default: true})
    active?: boolean;
}