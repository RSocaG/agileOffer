"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const offer_module_1 = require("./offer/offer.module");
const company_module_1 = require("./company/company.module");
const tag_module_1 = require("./tag/tag.module");
const location_module_1 = require("./location/location.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forRoot('mongodb://localhost:27017/pruebamongodb', { useNewUrlParser: true, useFindAndModify: false }), offer_module_1.OfferModule, company_module_1.CompanyModule, tag_module_1.TagModule, location_module_1.LocationModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map