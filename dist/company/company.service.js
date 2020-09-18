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
const common_1 = require("@nestjs/common");
const company_model_1 = require("./models/company.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let CompanyService = class CompanyService {
    constructor(companyModel) {
        this.companyModel = companyModel;
    }
    async getCompanys() {
        const companys = await this.companyModel.find({ active: true });
        return companys;
    }
    async getCompany(companyId) {
        const company = await this.companyModel.findById(companyId);
        return company;
    }
    async createCompany(companyDto) {
        const company = await new this.companyModel(companyDto);
        return await company.save();
    }
    async deleteCompany(companyId) {
        const company = await this.getCompany(companyId);
        if (company.offers.length > 0) {
            throw new common_1.ConflictException('Company is been used.');
        }
        const deletedCompany = await this.companyModel.findByIdAndUpdate(companyId, { active: false }, { new: true })
            .exec();
        return deletedCompany;
    }
    async updateCompany(companyId, companyDto) {
        const updatedCompany = await this.companyModel.findByIdAndUpdate(companyId, companyDto, { new: true }).exec();
        return updatedCompany;
    }
    async allocateOffer(companyId, offerId) {
        const updatedCompany = await this.companyModel.findByIdAndUpdate(companyId, { $push: { offers: offerId } }, { new: true }).exec();
        return updatedCompany;
    }
};
CompanyService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(company_model_1.Company)),
    __metadata("design:paramtypes", [Object])
], CompanyService);
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map