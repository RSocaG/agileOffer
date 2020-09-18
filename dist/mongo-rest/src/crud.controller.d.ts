import { Type } from '@nestjs/common';
import { ICrudController } from './interfaces';
export interface CrudControllerConfig {
    modelDto: any;
    createDto: any;
    updateDto?: any;
}
export declare function CrudController(service: any, config: CrudControllerConfig): Type<ICrudController>;
