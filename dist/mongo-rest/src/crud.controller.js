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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("./dto");
const request_parser_service_1 = require("./request-parser.service");
function CrudController(service, config) {
    class MongoRestControllerHost {
        service() {
            return this.crudService;
        }
        async getAll(query, dto, request) {
            const queryParsed = request_parser_service_1.RequestParserService.parseQuery(query);
            const data = await this.crudService.getAll(queryParsed, dto);
            const count = await this.crudService.count(queryParsed, dto);
            return {
                data,
                count,
                total: count,
            };
        }
        async get(id) {
            return await this.crudService.get(id);
        }
        async create(dto, request) {
            return await this.crudService.create(dto);
        }
        async update(id, dto, request) {
            return await this.crudService.update(id, dto);
        }
        async delete(id, request) {
            return await this.crudService.delete(id);
        }
    }
    __decorate([
        common_1.Inject(service),
        __metadata("design:type", Object)
    ], MongoRestControllerHost.prototype, "crudService", void 0);
    __decorate([
        swagger_1.ApiResponse({
            status: 200,
            description: 'The found records',
            type: [config.modelDto],
        }),
        swagger_1.ApiBadRequestResponse(),
        swagger_1.ApiInternalServerErrorResponse(),
        common_1.Get(),
        __param(0, common_1.Query()),
        __param(2, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [dto_1.GetAllQueryDto, Object, Object]),
        __metadata("design:returntype", Promise)
    ], MongoRestControllerHost.prototype, "getAll", null);
    __decorate([
        swagger_1.ApiResponse({
            status: 200,
            description: 'The found record',
            type: config.modelDto,
        }),
        swagger_1.ApiNotFoundResponse(),
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], MongoRestControllerHost.prototype, "get", null);
    __decorate([
        swagger_1.ApiBody({
            type: config.createDto,
        }),
        swagger_1.ApiResponse({
            status: 201,
            description: 'The created record',
            type: config.modelDto,
        }),
        swagger_1.ApiBadRequestResponse(),
        swagger_1.ApiInternalServerErrorResponse(),
        common_1.Post(),
        __param(0, common_1.Body()), __param(1, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], MongoRestControllerHost.prototype, "create", null);
    __decorate([
        swagger_1.ApiBody({
            type: config.updateDto || config.createDto,
        }),
        swagger_1.ApiResponse({
            status: 200,
            description: 'The updated record',
            type: config.modelDto,
        }),
        swagger_1.ApiBadRequestResponse(),
        swagger_1.ApiInternalServerErrorResponse(),
        common_1.Put(':id'),
        __param(0, common_1.Param('id')),
        __param(1, common_1.Body()),
        __param(2, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object, Object]),
        __metadata("design:returntype", Promise)
    ], MongoRestControllerHost.prototype, "update", null);
    __decorate([
        swagger_1.ApiResponse({
            status: 200,
            description: 'The deleted record',
            type: config.modelDto,
        }),
        common_1.Delete(':id'),
        swagger_1.ApiNotFoundResponse(),
        __param(0, common_1.Param('id')), __param(1, common_1.Req()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Promise)
    ], MongoRestControllerHost.prototype, "delete", null);
    return MongoRestControllerHost;
}
exports.CrudController = CrudController;
//# sourceMappingURL=crud.controller.js.map