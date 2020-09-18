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
const nestjs_typegoose_1 = require("nestjs-typegoose");
const mongoose_1 = require("mongoose");
function MongoCrudService(typegooseModel) {
    class MongoCrudServiceHost {
        async get(id) {
            id = typeof id === 'string' ? mongoose_1.Types.ObjectId(id) : id;
            return await this.model.findOne({ _id: id, active: true }).exec();
        }
        async getOne(dto) {
            return await this.model.findOne(dto).exec();
        }
        async getAll(query, dto) {
            const mongoQuery = this.model
                .find(Object.assign(Object.assign({}, dto), { active: true }))
                .skip(query.skip);
            if (query.limit !== -1) {
                mongoQuery.limit(query.limit);
            }
            return await mongoQuery.exec();
        }
        async count(query, dto) {
            let criteria = { active: true };
            if (dto) {
                criteria = Object.assign(Object.assign({}, criteria), dto);
            }
            const mongoQuery = this.model.countDocuments(criteria);
            return await mongoQuery.exec();
        }
        async create(dto) {
            return await this.model.create(dto);
        }
        async update(id, dto) {
            return await this.model.findByIdAndUpdate(id, dto, { new: true }).exec();
        }
        async delete(id) {
            return await this.model
                .findByIdAndUpdate(id, { active: false }, { new: true })
                .exec();
        }
    }
    __decorate([
        nestjs_typegoose_1.InjectModel(typegooseModel),
        __metadata("design:type", mongoose_1.Model)
    ], MongoCrudServiceHost.prototype, "model", void 0);
    return MongoCrudServiceHost;
}
exports.MongoCrudService = MongoCrudService;
//# sourceMappingURL=mongo-crud.service.js.map