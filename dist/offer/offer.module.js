"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const offer_controller_1 = require("./offer.controller");
const offer_service_1 = require("./offer.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const offer_model_1 = require("./models/offer.model");
const company_module_1 = require("../company/company.module");
const location_module_1 = require("../location/location.module");
const tag_module_1 = require("../tag/tag.module");
let OfferModule = class OfferModule {
};
OfferModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([offer_model_1.Offer]), company_module_1.CompanyModule, location_module_1.LocationModule, common_1.forwardRef(() => tag_module_1.TagModule)],
        controllers: [offer_controller_1.OfferController],
        providers: [offer_service_1.OfferService],
        exports: [offer_service_1.OfferService],
    })
], OfferModule);
exports.OfferModule = OfferModule;
//# sourceMappingURL=offer.module.js.map