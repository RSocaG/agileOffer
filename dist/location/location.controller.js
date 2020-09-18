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
const location_service_1 = require("./location.service");
const location_dto_1 = require("./dto/location.dto");
const swagger_1 = require("@nestjs/swagger");
let LocationController = class LocationController {
    constructor(locationService) {
        this.locationService = locationService;
    }
    async createLocation(res, locationDto) {
        const location = await this.locationService.createLocation(locationDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Location Successfully Created',
            location
        });
    }
    async getLocations(res) {
        const locations = await this.locationService.getLocations();
        return res.status(common_1.HttpStatus.OK).json({
            locations
        });
    }
    async getLocation(res, locatioID) {
        const location = await this.locationService.getLocation(locatioID);
        if (!location) {
            throw new common_1.NotFoundException('Location does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            location
        });
    }
    async deleteLocation(res, locatioID) {
        const locationDeleted = await this.locationService.deleteLocation(locatioID);
        if (!locationDeleted) {
            throw new common_1.NotFoundException('Location does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Location Deleted Successfully',
            location: locationDeleted
        });
    }
    async updateLocation(res, locationDto, locationID) {
        const updatedLocation = await this.locationService.updateLocation(locationID, location_dto_1.LocationDto);
        if (!updatedLocation) {
            throw new common_1.NotFoundException('Location does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Location Updated Successfully',
            location: updatedLocation
        });
    }
};
__decorate([
    common_1.Post(),
    openapi.ApiResponse({ status: 201, type: require("./models/location.model").Location }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, location_dto_1.LocationDto]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "createLocation", null);
__decorate([
    common_1.Get(),
    openapi.ApiResponse({ status: 200, type: [require("./models/location.model").Location] }),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocations", null);
__decorate([
    common_1.Get(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/location.model").Location }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getLocation", null);
__decorate([
    common_1.Delete(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/location.model").Location }),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "deleteLocation", null);
__decorate([
    common_1.Put(':id'),
    openapi.ApiResponse({ status: 200, type: require("./models/location.model").Location }),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, location_dto_1.LocationDto, String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocation", null);
LocationController = __decorate([
    common_1.Controller('location'),
    swagger_1.ApiTags('Location'),
    __metadata("design:paramtypes", [location_service_1.LocationService])
], LocationController);
exports.LocationController = LocationController;
//# sourceMappingURL=location.controller.js.map