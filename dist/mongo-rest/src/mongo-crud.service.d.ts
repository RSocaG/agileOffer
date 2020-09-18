import { ICrudService } from './interfaces';
import { Type } from '@nestjs/common';
import { TypegooseClass } from 'nestjs-typegoose/dist/typegoose-class.interface';
export declare function MongoCrudService<T>(typegooseModel: TypegooseClass): Type<ICrudService>;
