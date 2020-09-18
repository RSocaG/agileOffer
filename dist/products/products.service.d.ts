import { Product } from './models/product.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CreateProductDto } from './dto/product.dto';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: ReturnModelType<typeof Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productId: string): Promise<Product>;
    createProduct(createProductDto: CreateProductDto): Promise<Product>;
    deleteProduct(productId: string): Promise<Product>;
    updateProduct(productId: string, createProductDto: CreateProductDto): Promise<Product>;
}
