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
class DealDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => Object }, price: { required: true, type: () => Number }, companys: { required: true, type: () => [Object] }, contacts: { required: true, type: () => [Object] }, stateID: { required: true, type: () => String } };
    }
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], DealDto.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], DealDto.prototype, "price", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ each: true }),
    __metadata("design:type", Array)
], DealDto.prototype, "companys", void 0);
__decorate([
    class_validator_1.IsNotEmpty({ each: true }),
    __metadata("design:type", Array)
], DealDto.prototype, "contacts", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], DealDto.prototype, "stateID", void 0);
exports.DealDto = DealDto;
//# sourceMappingURL=deal.dto.js.map