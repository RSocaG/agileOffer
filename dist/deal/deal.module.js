"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const deal_service_1 = require("./deal.service");
const deal_controller_1 = require("./deal.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const deal_model_1 = require("./models/deal.model");
const state_service_1 = require("../state/state.service");
const company_service_1 = require("../company/company.service");
const contact_service_1 = require("../contact/contact.service");
const contact_model_1 = require("../contact/models/contact.model");
const state_model_1 = require("../state/models/state.model");
const company_model_1 = require("../company/models/company.model");
let DealModule = class DealModule {
};
DealModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([deal_model_1.Deal, state_model_1.State, company_model_1.Company, contact_model_1.Contact])],
        providers: [deal_service_1.DealService, state_service_1.StateService, company_service_1.CompanyService, contact_service_1.ContactService],
        controllers: [deal_controller_1.DealController]
    })
], DealModule);
exports.DealModule = DealModule;
//# sourceMappingURL=deal.module.js.map