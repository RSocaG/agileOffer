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
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ClientDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, commercialname: { required: true, type: () => String }, cif: { required: true, type: () => String }, active: { required: true, type: () => Boolean }, iva: { required: true, type: () => Boolean }, comission: { required: true, type: () => Number }, intrast: { required: true, type: () => Boolean }, soivre: { required: true, type: () => Boolean }, insuredcapital: { required: true, type: () => Number }, maximumrisk: { required: true, type: () => Number }, iban: { required: true, type: () => String }, swift: { required: true, type: () => String }, expirationdays: { required: true, type: () => Number }, observations: { required: true, type: () => String }, impostantnotice: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "commercialname", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "cif", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ClientDto.prototype, "active", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ClientDto.prototype, "iva", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClientDto.prototype, "comission", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ClientDto.prototype, "intrast", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], ClientDto.prototype, "soivre", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClientDto.prototype, "insuredcapital", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClientDto.prototype, "maximumrisk", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "iban", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "swift", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], ClientDto.prototype, "expirationdays", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "observations", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], ClientDto.prototype, "impostantnotice", void 0);
exports.ClientDto = ClientDto;
//# sourceMappingURL=client.dto.js.map