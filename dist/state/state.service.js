"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongo_crud_service_1 = require("../mongo-rest/src/mongo-crud.service");
const state_model_1 = require("./models/state.model");
let StateService = class StateService extends mongo_crud_service_1.MongoCrudService(state_model_1.State) {
};
StateService = __decorate([
    common_1.Injectable()
], StateService);
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map