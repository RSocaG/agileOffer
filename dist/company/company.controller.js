"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const company_service_1 = require("./company.service");
const company_dto_1 = require("./dto/company.dto");
const swagger_1 = require("@nestjs/swagger");
let CompanyController = class CompanyController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async createCompany(res, companyDto) {
        const company = await this.companyService.createCompany(companyDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Company Successfully Created',
            company
        });
    }
    async getCompanys(res) {
        const companys = await this.companyService.getCompanys();
        return res.status(common_1.HttpStatus.OK).json({
            companys
        });
    }
    async getCompany(res, companyID) {
        const company = await this.companyService.getCompany(companyID);
        if (!company) {
            throw new common_1.NotFoundException('Company does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            company
        });
    }
    async deleteCompany(res, companyID) {
        const companyDeleted = await this.companyService.deleteCompany(companyID);
        if (!companyDeleted) {
            throw new common_1.NotFoundException('Company does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Company Deleted Successfully',
            company: companyDeleted
        });
    }
    async updateCompany(res, companyDto, companyID) {
        const updatedCompany = await this.companyService.updateCompany(companyID, companyDto);
        if (!updatedCompany) {
            throw new common_1.NotFoundException('Company does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Company Updated Successfully',
            company: updatedCompany
        });
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./models/company.model").Company }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CompanyDto]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "createCompany", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./models/company.model").Company] }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompanys", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/company.model").Company }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "getCompany", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/company.model").Company }),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "deleteCompany", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/company.model").Company }),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, company_dto_1.CompanyDto, String]),
    __metadata("design:returntype", Promise)
], CompanyController.prototype, "updateCompany", null);
CompanyController = __decorate([
    common_1.Controller('company'),
    swagger_1.ApiTags('Company'),
    __metadata("design:paramtypes", [company_service_1.CompanyService])
], CompanyController);
exports.CompanyController = CompanyController;
//# sourceMappingURL=company.controller.js.map