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
const state_model_1 = require("../../state/models/state.model");
const company_model_1 = require("../../company/models/company.model");
const contact_model_1 = require("../../contact/models/contact.model");
class Deal {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Deal.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({ default: 0 }),
    __metadata("design:type", Number)
], Deal.prototype, "index", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Deal.prototype, "price", void 0);
__decorate([
    typegoose_1.prop({ ref: state_model_1.State }),
    __metadata("design:type", Object)
], Deal.prototype, "stateId", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: company_model_1.Company }),
    __metadata("design:type", Array)
], Deal.prototype, "companys", void 0);
__decorate([
    typegoose_1.arrayProp({ itemsRef: contact_model_1.Contact }),
    __metadata("design:type", Array)
], Deal.prototype, "contacts", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], Deal.prototype, "active", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], Deal.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], Deal.prototype, "updatedAt", void 0);
exports.Deal = Deal;
//# sourceMappingURL=deal.model.js.map