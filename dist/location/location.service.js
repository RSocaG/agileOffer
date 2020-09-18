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
const location_model_1 = require("./models/location.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const offer_service_1 = require("../offer/offer.service");
const bson_1 = require("bson");
let LocationService = class LocationService {
    constructor(locationModel, offerService) {
        this.locationModel = locationModel;
        this.offerService = offerService;
    }
    async getLocations() {
        const locations = await this.locationModel.find({ active: true });
        return locations;
    }
    async getLocation(locationId) {
        const location = await this.locationModel.findById(locationId);
        return location;
    }
    async createLocation(locationDto) {
        const location = await new this.locationModel(locationDto);
        return await location.save();
    }
    async deleteLocation(locationId) {
        const offers = (await this.offerService.getOffers()).filter(x => x.tags.includes(new bson_1.ObjectId(locationId)));
        if (offers.length > 0) {
            throw new common_1.ConflictException("Location is been used");
        }
        const deletedLocation = await this.locationModel.findByIdAndUpdate(locationId, { active: false }, { new: true })
            .exec();
        return deletedLocation;
    }
    async updateLocation(locationId, locationDto) {
        const updatedLocation = await this.locationModel.findByIdAndUpdate(locationId, locationDto, { new: true }).exec();
        return updatedLocation;
    }
};
LocationService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(location_model_1.Location)),
    __param(1, common_1.Inject(common_1.forwardRef(() => offer_service_1.OfferService))),
    __metadata("design:paramtypes", [Object, offer_service_1.OfferService])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map