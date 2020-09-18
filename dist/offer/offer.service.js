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
const nestjs_typegoose_1 = require("nestjs-typegoose");
const offer_model_1 = require("./models/offer.model");
const tag_service_1 = require("../tag/tag.service");
const location_service_1 = require("../location/location.service");
const bson_1 = require("bson");
const company_service_1 = require("../company/company.service");
let OfferService = class OfferService {
    constructor(offerModel, tagService, locationService, companyService) {
        this.offerModel = offerModel;
        this.tagService = tagService;
        this.locationService = locationService;
        this.companyService = companyService;
    }
    async getOffers() {
        const offers = await this.offerModel.find({ active: true }).sort({ createdAt: -1 });
        return this.insertDelayToOffers(offers);
    }
    async getOffersByTags(tags) {
        const tagsList = tags.split("%");
        const offers = await this.offerModel.find({
            active: true,
            tags: { $all: tagsList }
        }).sort({ createdAt: -1 });
        return this.insertDelayToOffers(offers);
    }
    async getOffer(offerId) {
        const offer = await this.offerModel.findById(offerId);
        return this.insertDelayToOffer(offer);
    }
    async createOffer(offerDto) {
        if (offerDto.location) {
            try {
                const _ = new bson_1.ObjectId(offerDto.location);
            }
            catch (error) {
                const locationId = await this.locationService.createLocation({ name: offerDto.location });
                offerDto.location = locationId.id;
            }
        }
        if (offerDto.tags.length > 0) {
            for (let i = 0; i < offerDto.tags.length; i++) {
                const tag = offerDto.tags[i];
                try {
                    const _ = new bson_1.ObjectId(tag);
                }
                catch (error) {
                    const tagId = await this.tagService.createTag({ name: tag });
                    offerDto.tags[i] = tagId.id;
                }
            }
            ;
        }
        const offer = await new this.offerModel(offerDto).save();
        await this.companyService.allocateOffer(offerDto.company, offer.id);
        return this.insertDelayToOffer(offer);
    }
    async deleteOffer(offerId) {
        const deletedOffer = await this.offerModel.findByIdAndUpdate(offerId, { active: false }, { new: true })
            .exec();
        return this.insertDelayToOffer(deletedOffer);
    }
    async updateOffer(offerId, offerDto) {
        const updatedOffer = await this.offerModel.findByIdAndUpdate(offerId, offerDto, { new: true }).exec();
        return this.insertDelayToOffer(updatedOffer);
    }
    async insertDelayToOffers(offers) {
        for (let offer of offers) {
            offer = await this.insertDelayToOffer(offer);
        }
        return offers;
    }
    async insertDelayToOffer(offer) {
        const difference = new Date().getTime() - offer.createdAt.getTime();
        const days = Math.round(difference / (60000 * 60 * 24));
        if (days < 7) {
            offer.delay = days > 0 ? `${days}d` : "today";
            offer.new = offer.delay === "today" ? true : false;
        }
        else {
            offer.new = false;
            const weeks = Math.floor(days / 7);
            if (weeks < 4) {
                offer.delay = `${weeks}w`;
            }
            else {
                const month = Math.floor(weeks / 4);
                offer.delay = month < 12 ? `${month}mo` : `${Math.floor(month / 12)}y`;
            }
        }
        await this.offerModel.findByIdAndUpdate(offer.id, offer);
        return offer;
    }
};
OfferService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(offer_model_1.Offer)),
    __param(2, common_1.Inject(common_1.forwardRef(() => location_service_1.LocationService))),
    __metadata("design:paramtypes", [Object, tag_service_1.TagService,
        location_service_1.LocationService,
        company_service_1.CompanyService])
], OfferService);
exports.OfferService = OfferService;
//# sourceMappingURL=offer.service.js.map