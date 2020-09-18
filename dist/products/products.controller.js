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
const product_dto_1 = require("./dto/product.dto");
const products_service_1 = require("./products.service");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    async createPost(res, createProductDto) {
        const product = await this.productService.createProduct(createProductDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product: product
        });
    }
    async getProducts(res) {
        const products = await this.productService.getProducts();
        return res.status(common_1.HttpStatus.OK).json({
            products: products
        });
    }
    async getProduct(res, productID) {
        const product = await this.productService.getProduct(productID);
        if (!product) {
            throw new common_1.NotFoundException('Products Does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            product: product
        });
    }
    async deleteProduct(res, productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        if (!productDeleted) {
            throw new common_1.NotFoundException('Products Does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }
    async updateProduct(res, createProductDto, productID) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDto);
        if (!updatedProduct) {
            throw new common_1.NotFoundException('Products Does not exist');
        }
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Product Updated Successfully',
            updatedProduct
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "createPost", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProducts", null);
__decorate([
    common_1.Get('/:productID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getProduct", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()),
    __param(1, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProduct", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateProduct", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map