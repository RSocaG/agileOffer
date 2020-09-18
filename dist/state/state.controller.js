"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const crud_controller_1 = require("../mongo-rest/src/crud.controller");
const state_service_1 = require("./state.service");
const state_dto_1 = require("./dto/state.dto");
const state_model_1 = require("./models/state.model");
let StateController = class StateController extends crud_controller_1.CrudController(state_service_1.StateService, {
    modelDto: state_model_1.State,
    createDto: state_dto_1.StateDto
}) {
};
StateController = __decorate([
    common_1.Controller('state')
], StateController);
exports.StateController = StateController;
//# sourceMappingURL=state.controller.js.map