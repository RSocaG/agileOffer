"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const state_service_1 = require("./state.service");
const state_controller_1 = require("./state.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const state_model_1 = require("./models/state.model");
let StateModule = class StateModule {
};
StateModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([state_model_1.State])],
        providers: [state_service_1.StateService],
        controllers: [state_controller_1.StateController]
    })
], StateModule);
exports.StateModule = StateModule;
//# sourceMappingURL=state.module.js.map