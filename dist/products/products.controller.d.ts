import { CreateProductDto } from "./dto/product.dto";
import { ProductsService } from "./products.service";
import { Product } from './models/product.model';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    createPost(res: any, createProductDto: CreateProductDto): Promise<Product>;
    getProducts(res: any): Promise<any>;
    getProduct(res: any, productID: any): Promise<any>;
    deleteProduct(res: any, productID: any): Promise<any>;
    updateProduct(res: any, createProductDto: CreateProductDto, productID: any): Promise<any>;
}
