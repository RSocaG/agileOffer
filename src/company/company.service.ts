import { Injectable, ConflictException } from '@nestjs/common';
import { Company } from './models/company.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CompanyDto } from './dto/company.dto';
import { OfferService } from '../offer/offer.service';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company) private readonly companyModel: ReturnModelType <typeof Company>){}
     
     async getCompanys(): Promise<Company[]>{
        const companys = await this.companyModel.find({active: true });
        return companys;
    }

    async getCompany(companyId: string ): Promise<Company>{
        const company = await this.companyModel.findById(companyId);
        return company;
    }

   async createCompany(companyDto: CompanyDto): 
    Promise<Company>{
        const company = await new this.companyModel(companyDto);
        return await company.save();
    }

    async deleteCompany(companyId: string): Promise<Company>{
        const company = await this.getCompany(companyId);
        if(company.offers.length > 0)
        {
            throw new ConflictException('Company is been used.');
        }
        const deletedCompany = await this.companyModel.findByIdAndUpdate(companyId, { active: false }, { new: true })
        .exec();
        return deletedCompany;
    }

    async updateCompany(companyId: string, companyDto: CompanyDto): Promise<Company>{
        const updatedCompany = await this.companyModel.findByIdAndUpdate(companyId, companyDto,{new: true}).exec();
        return updatedCompany;
    }

    async allocateOffer(companyId: string, offerId: string): Promise<Company>{
        const updatedCompany = await this.companyModel.findByIdAndUpdate(companyId, {$push: {offers: offerId}},{new: true}).exec();
        return updatedCompany;
    }
}
