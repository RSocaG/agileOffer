import { prop, Ref, arrayProp } from "@typegoose/typegoose";
import { Tag } from "../../tag/models/tag.model";
import { Location } from "../../location/models/location.model";
import { Company } from "../../company/models/company.model";
import { EmploymentType } from "./employmentType.enum";

export class Offer{
    id?: String;

    @prop()
    name: String;

    @prop()
    delay?: String;

    @prop({ default: () => new Date (new Date().toUTCString()) })
    createdAt?: Date;

    @prop()
    new: boolean;

    @prop({ref: Location})
    location?: Ref<Location>;

    @prop({enum: EmploymentType})
    employmentType: EmploymentType;

    @prop({ref: Company})
    company: Ref<Company>;

    @arrayProp({itemsRef: Tag})
    tags: Array<Ref<Tag>>;

    @prop({default: true})
    active?: boolean;
}