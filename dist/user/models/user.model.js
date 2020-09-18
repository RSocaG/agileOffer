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
const user_role_enum_1 = require("./user-role.enum");
const bear_color_enum_1 = require("../../bears/models/bear-color.enum");
class User {
}
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "userName", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "facebook", void 0);
__decorate([
    typegoose_1.prop(),
    __metadata("design:type", String)
], User.prototype, "twitter", void 0);
__decorate([
    typegoose_1.prop({ enum: bear_color_enum_1.BearColor }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    typegoose_1.prop({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    typegoose_1.prop({ default: () => new Date(new Date().toUTCString()) }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
exports.User = User;
//# sourceMappingURL=user.model.js.map