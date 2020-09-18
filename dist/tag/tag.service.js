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
const tag_model_1 = require("./models/tag.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const offer_service_1 = require("../offer/offer.service");
let TagService = class TagService {
    constructor(tagModel, offerService) {
        this.tagModel = tagModel;
        this.offerService = offerService;
    }
    async getTags() {
        const tags = await this.tagModel.find({ active: true });
        return tags;
    }
    async getTag(tagId) {
        const tag = await this.tagModel.findById(tagId);
        return tag;
    }
    async createTag(tagDto) {
        const tag = await new this.tagModel(tagDto);
        return await tag.save();
    }
    async deleteTag(tagId) {
        const offers = (await this.offerService.getOffers()).filter(x => x.location.toString() === tagId);
        if (offers.length > 0) {
            throw new common_1.ConflictException("Location is been used");
        }
        const deletedTag = await this.tagModel.findByIdAndUpdate(tagId, { active: false }, { new: true })
            .exec();
        return deletedTag;
    }
    async updateTag(tagId, tagDto) {
        const updatedTag = await this.tagModel.findByIdAndUpdate(tagId, tagDto, { new: true }).exec();
        return updatedTag;
    }
};
TagService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(tag_model_1.Tag)),
    __param(1, common_1.Inject(common_1.forwardRef(() => offer_service_1.OfferService))),
    __metadata("design:paramtypes", [Object, offer_service_1.OfferService])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map