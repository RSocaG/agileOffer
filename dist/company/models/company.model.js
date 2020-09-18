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
const offer_model_1 = require("../../offer/models/offer.model");
class Company {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Company.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Company.prototype, "relatedImage", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], Company.prototype, "active", void 0);
__decorate([
    typegoose_1.prop({ itemsRef: offer_model_1.Offer }),
    __metadata("design:type", Array)
], Company.prototype, "offers", void 0);
exports.Company = Company;
//# sourceMappingURL=company.model.js.map