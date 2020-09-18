import { Company } from './models/company.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CompanyDto } from './dto/company.dto';
export declare class CompanyService {
    private readonly companyModel;
    constructor(companyModel: ReturnModelType<typeof Company>);
    getCompanys(): Promise<Company[]>;
    getCompany(companyId: string): Promise<Company>;
    createCompany(companyDto: CompanyDto): Promise<Company>;
    deleteCompany(companyId: string): Promise<Company>;
    updateCompany(companyId: string, companyDto: CompanyDto): Promise<Company>;
    allocateOffer(companyId: string, offerId: string): Promise<Company>;
}
