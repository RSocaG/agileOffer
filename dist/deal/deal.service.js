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
const mongo_crud_service_1 = require("../mongo-rest/src/mongo-crud.service");
const deal_model_1 = require("./models/deal.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const state_service_1 = require("../state/state.service");
const company_service_1 = require("../company/company.service");
const contact_service_1 = require("../contact/contact.service");
const mongoose_1 = require("mongoose");
let DealService = class DealService extends mongo_crud_service_1.MongoCrudService(deal_model_1.Deal) {
    constructor(dealModel, stateService, companyService, contactService) {
        super();
        this.dealModel = dealModel;
        this.stateService = stateService;
        this.companyService = companyService;
        this.contactService = contactService;
    }
    async create(dto) {
        const { companys, contacts, name, price, stateID } = dto;
        const newDeal = new this.dealModel();
        newDeal.name = name;
        newDeal.price = price;
        if (!mongoose_1.Types.ObjectId.isValid(stateID)) {
            throw new common_1.BadRequestException();
        }
        const state = await this.stateService.get(stateID);
        if (!state) {
            throw new common_1.NotFoundException();
        }
        newDeal.stateId = state;
        let company;
        for (company of companys) {
            if (mongoose_1.Types.ObjectId.isValid(company)) {
                const actualCompany = await this.companyService.get(company);
                if (!actualCompany) {
                    throw new common_1.NotFoundException();
                }
                else {
                    newDeal.companys.push(mongoose_1.Types.ObjectId(actualCompany.id));
                }
            }
            else {
                const actualCompany = await this.companyService.create(company);
                if (!actualCompany) {
                    throw new common_1.InternalServerErrorException();
                }
                else {
                    newDeal.companys.push(mongoose_1.Types.ObjectId(actualCompany.id));
                }
            }
        }
        let contact;
        for (contact of contacts) {
            if (mongoose_1.Types.ObjectId.isValid(contact)) {
                const actualContact = await this.contactService.get(contact);
                if (!actualContact) {
                    throw new common_1.NotFoundException();
                }
                else {
                    newDeal.contacts.push(mongoose_1.Types.ObjectId(actualContact.id));
                }
            }
            else {
                const actualContact = await this.contactService.create(contact);
                if (!actualContact) {
                    throw new common_1.InternalServerErrorException();
                }
                else {
                    newDeal.contacts.push(mongoose_1.Types.ObjectId(actualContact.id));
                }
            }
        }
        return await newDeal.save();
    }
};
DealService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(deal_model_1.Deal)),
    __metadata("design:paramtypes", [Object, state_service_1.StateService,
        company_service_1.CompanyService,
        contact_service_1.ContactService])
], DealService);
exports.DealService = DealService;
//# sourceMappingURL=deal.service.js.map