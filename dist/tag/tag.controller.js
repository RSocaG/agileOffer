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
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const tag_service_1 = require("./tag.service");
const tag_dto_1 = require("./dto/tag.dto");
const swagger_1 = require("@nestjs/swagger");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async createTag(res, tagDto) {
        const tag = await this.tagService.createTag(tagDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Tag Successfully Created',
            tag
        });
    }
    async getTags(res) {
        const tags = await this.tagService.getTags();
        return res.status(common_1.HttpStatus.OK).json({
            tags
        });
    }
    async getTag(res, tagID) {
        const tag = await this.tagService.getTag(tagID);
        if (!tag) {
            throw new common_1.NotFoundException('Tag does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            tag
        });
    }
    async deleteTag(res, tagID) {
        const tagDeleted = await this.tagService.deleteTag(tagID);
        if (!tagDeleted) {
            throw new common_1.NotFoundException('Tag does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Tag Deleted Successfully',
            tag: tagDeleted
        });
    }
    async updateTag(res, tagDto, tagID) {
        const updatedTag = await this.tagService.updateTag(tagID, tagDto);
        if (!updatedTag) {
            throw new common_1.NotFoundException('Tag does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Tag Updated Successfully',
            tag: updatedTag
        });
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./models/tag.model").Tag }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, tag_dto_1.TagDto]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "createTag", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./models/tag.model").Tag] }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getTags", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/tag.model").Tag }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getTag", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/tag.model").Tag }),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "deleteTag", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/tag.model").Tag }),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, tag_dto_1.TagDto, String]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "updateTag", null);
TagController = __decorate([
    common_1.Controller('tag'),
    swagger_1.ApiTags('Tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map