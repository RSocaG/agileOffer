import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { Company } from './models/company.model';
export declare class CompanyController {
    private readonly companyService;
    constructor(companyService: CompanyService);
    createCompany(res: any, companyDto: CompanyDto): Promise<Company>;
    getCompanys(res: any): Promise<Company[]>;
    getCompany(res: any, companyID: string): Promise<Company>;
    deleteCompany(res: any, companyID: string): Promise<Company>;
    updateCompany(res: any, companyDto: CompanyDto, companyID: string): Promise<Company>;
}
