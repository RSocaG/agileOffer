"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const crud_controller_1 = require("../mongo-rest/src/crud.controller");
const bears_service_1 = require("./bears.service");
const bear_model_1 = require("./models/bear.model");
const bear_dto_1 = require("./dto/bear.dto");
let BearsController = class BearsController extends crud_controller_1.CrudController(bears_service_1.BearsService, {
    modelDto: bear_model_1.Bear,
    createDto: bear_dto_1.BearDto
}) {
};
BearsController = __decorate([
    common_1.Controller('bears')
], BearsController);
exports.BearsController = BearsController;
//# sourceMappingURL=bears.controller.js.map