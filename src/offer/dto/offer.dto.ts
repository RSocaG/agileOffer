import { IsString, IsNotEmpty, IsDate, IsBoolean, IsObject, IsOptional } from "class-validator";
import { Tag } from "../../tag/models/tag.model";
import { Company } from "../../company/models/company.model";import { EmploymentType } from "../models/employmentType.enum";


export class OfferDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsBoolean()
    @IsOptional()
    new?: boolean;

    @IsString()
    @IsNotEmpty()
    delay?: string;

    @IsString()
    @IsNotEmpty()
    location?: string;

    @IsString()
    @IsNotEmpty()
    employmentType: EmploymentType;

    @IsString()    
    @IsNotEmpty()
    company: string;

    @IsNotEmpty({each: true})
    tags: any[];
}