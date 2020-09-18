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
const client_model_1 = require("./models/client.model");
let ClientService = class ClientService extends mongo_crud_service_1.MongoCrudService(client_model_1.Client) {
};
ClientService = __decorate([
    common_1.Injectable()
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map