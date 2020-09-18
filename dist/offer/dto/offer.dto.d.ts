import { EmploymentType } from "../models/employmentType.enum";
export declare class OfferDto {
    name: string;
    new?: boolean;
    delay?: string;
    location?: string;
    employmentType: EmploymentType;
    company: string;
    tags: any[];
}
