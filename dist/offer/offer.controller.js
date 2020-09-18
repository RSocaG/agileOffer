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
const offer_dto_1 = require("./dto/offer.dto");
const offer_service_1 = require("./offer.service");
const swagger_1 = require("@nestjs/swagger");
let OfferController = class OfferController {
    constructor(offerService) {
        this.offerService = offerService;
    }
    async createOffer(res, offerDto) {
        const offer = await this.offerService.createOffer(offerDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Offer Successfully Created',
            offer
        });
    }
    async getOffers(res, tags) {
        if (tags) {
            const offers = await this.offerService.getOffersByTags(tags);
            if (!offers) {
                throw new common_1.NotFoundException('Does not exist any offer with those tags.');
            }
            return res.status(common_1.HttpStatus.OK).json({
                offers
            });
        }
        const offers = await this.offerService.getOffers();
        return res.status(common_1.HttpStatus.OK).json({
            offers
        });
    }
    async getOffer(res, offerID) {
        const offer = await this.offerService.getOffer(offerID);
        if (!offer) {
            throw new common_1.NotFoundException('Offer does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            offer
        });
    }
    async deleteOffer(res, offerID) {
        const offerDeleted = await this.offerService.deleteOffer(offerID);
        if (!offerDeleted) {
            throw new common_1.NotFoundException('Offer does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Offer Deleted Successfully',
            offer: offerDeleted
        });
    }
    async updateOffer(res, offerDto, offerID) {
        const updatedOffer = await this.offerService.updateOffer(offerID, offerDto);
        if (!updatedOffer) {
            throw new common_1.NotFoundException('Offer does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Offer Updated Successfully',
            offer: updatedOffer
        });
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./models/offer.model").Offer }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, offer_dto_1.OfferDto]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "createOffer", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./models/offer.model").Offer] }),
    __param(0, common_1.Res()), __param(1, common_1.Query('tags')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "getOffers", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/offer.model").Offer }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "getOffer", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/offer.model").Offer }),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "deleteOffer", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/offer.model").Offer }),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, offer_dto_1.OfferDto, String]),
    __metadata("design:returntype", Promise)
], OfferController.prototype, "updateOffer", null);
OfferController = __decorate([
    common_1.Controller('offer'),
    swagger_1.ApiTags('Offer'),
    __metadata("design:paramtypes", [offer_service_1.OfferService])
], OfferController);
exports.OfferController = OfferController;
//# sourceMappingURL=offer.controller.js.map