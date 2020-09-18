import { Controller, NotFoundException ,HttpStatus,  Get, Post, Put, Delete, Body, Param, Res, Query } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyDto } from './dto/company.dto';
import { Company } from './models/company.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('company')
@ApiTags('Company')
export class CompanyController {
    constructor(private readonly companyService: 
        CompanyService){}

    @Post()
    async createCompany(@Res() res, @Body() companyDto: 
    CompanyDto): Promise<Company>{
        const company = await this.companyService.createCompany(companyDto);
        return res.status(HttpStatus.OK).json({
            message: 'Company Successfully Created',
            company
        });
    }

    @Get()
    async getCompanys(@Res() res): Promise<Company[]>{
        const companys = await this.companyService.getCompanys();
        return res.status(HttpStatus.OK).json({
            companys
        });
    }

    @Get(':id')
    async getCompany(@Res() res, @Param('id') companyID: string): Promise<Company> {
        const company = 
        await this.companyService.getCompany(companyID);

        if(!company){
            throw new NotFoundException('Company does not exist');
        }

        return res.status(HttpStatus.OK).json({
            company
        });
    }


    @Delete(':id')
    async deleteCompany(@Res() res, 
    @Param('id') companyID: string): Promise<Company>{

        const companyDeleted = await this.companyService.deleteCompany(companyID);
        
        if(!companyDeleted){
            throw new NotFoundException('Company does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Company Deleted Successfully',
            company: companyDeleted
        });
    }

    @Put(':id')
    async updateCompany(@Res() res, 
    @Body() companyDto: CompanyDto,
    @Param('id') companyID: string): Promise<Company>{
    const updatedCompany = await this.companyService.updateCompany(companyID, companyDto);
    if(!updatedCompany){
        throw new NotFoundException('Company does not exist');
    }
    return res.status(HttpStatus.OK).json({
        message: 'Company Updated Successfully',
        company: updatedCompany
    });
    }
}