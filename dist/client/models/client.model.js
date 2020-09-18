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
class Client {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "commercialname", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "cif", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], Client.prototype, "active", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], Client.prototype, "iva", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Client.prototype, "comission", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], Client.prototype, "intrast", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Boolean)
], Client.prototype, "soivre", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Client.prototype, "insuredcapital", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Client.prototype, "maximumrisk", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "iban", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "swift", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", Number)
], Client.prototype, "expirationdays", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "observations", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], Client.prototype, "importantnotice", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], Client.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], Client.prototype, "updatedAt", void 0);
exports.Client = Client;
//# sourceMappingURL=client.model.js.map