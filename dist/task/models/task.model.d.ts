import { Ref } from "@typegoose/typegoose";
import { Deal } from "../../deal/models/deal.model";
export declare class Task {
    id?: String;
    name: String;
    dueDate: Date;
    dealId: Ref<Deal>;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
