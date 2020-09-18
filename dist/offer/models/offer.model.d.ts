import { Ref } from "@typegoose/typegoose";
import { Tag } from "../../tag/models/tag.model";
import { Location } from "../../location/models/location.model";
import { Company } from "../../company/models/company.model";
import { EmploymentType } from "./employmentType.enum";
export declare class Offer {
    id?: String;
    name: String;
    delay?: String;
    createdAt?: Date;
    new: boolean;
    location?: Ref<Location>;
    employmentType: EmploymentType;
    company: Ref<Company>;
    tags: Array<Ref<Tag>>;
    active?: boolean;
}
