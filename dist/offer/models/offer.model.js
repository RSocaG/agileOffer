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
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
const tag_model_1 = require("../../tag/models/tag.model");
const location_model_1 = require("../../location/models/location.model");
const company_model_1 = require("../../company/models/company.model");
const employmentType_enum_1 = require("./employmentType.enum");
class Offer {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Offer.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Offer.prototype, "delay", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], Offer.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], Offer.prototype, "new", void 0);
__decorate([
    typegoose_1.prop({ ref: location_model_1.Location }),
    __metadata("design:type", Object)
], Offer.prototype, "location", void 0);
__decorate([
    typegoose_1.prop({ enum: employmentType_enum_1.EmploymentType }),
    __metadata("design:type", String)
], Offer.prototype, "employmentType", void 0);
__decorate([
    typegoose_1.prop({ ref: company_model_1.Company }),
    __metadata("design:type", Object)
], Offer.prototype, "company", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: tag_model_1.Tag }),
    __metadata("design:type", Array)
], Offer.prototype, "tags", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], Offer.prototype, "active", void 0);
exports.Offer = Offer;
//# sourceMappingURL=offer.model.js.map