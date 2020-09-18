import { IsString, IsNotEmpty, IsUrl } from "class-validator";
import { Ref } from "@typegoose/typegoose";
import { Url } from "url";

export class CompanyDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUrl()
    @IsNotEmpty()
    relatedImage: string;

    @IsNotEmpty({each: true})
    offers: any[];
}