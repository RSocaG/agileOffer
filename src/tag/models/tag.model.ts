import { prop } from "@typegoose/typegoose";

export class Tag{
    id?: string;

    @prop()
    name: string;

    @prop({default: true})
    active?: boolean;
}