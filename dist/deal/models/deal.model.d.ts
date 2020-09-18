import { Ref } from "@typegoose/typegoose";
import { State } from "../../state/models/state.model";
import { Company } from "../../company/models/company.model";
import { Contact } from "../../contact/models/contact.model";
export declare class Deal {
    id?: String;
    name: String;
    index: number;
    price: number;
    stateId: Ref<State>;
    companys: Array<Ref<Company>>;
    contacts: Array<Ref<Contact>>;
    active?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
