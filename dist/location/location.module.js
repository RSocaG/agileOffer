"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const location_controller_1 = require("./location.controller");
const location_service_1 = require("./location.service");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const location_model_1 = require("./models/location.model");
const offer_module_1 = require("../offer/offer.module");
let LocationModule = class LocationModule {
};
LocationModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([location_model_1.Location]), common_1.forwardRef(() => offer_module_1.OfferModule)],
        controllers: [location_controller_1.LocationController],
        providers: [location_service_1.LocationService],
        exports: [location_service_1.LocationService]
    })
], LocationModule);
exports.LocationModule = LocationModule;
//# sourceMappingURL=location.module.js.map