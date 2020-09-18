import { Module, forwardRef } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag } from './models/tag.model';
import { TypegooseModule } from 'nestjs-typegoose';
import { OfferModule } from '../offer/offer.module';

@Module({
  imports: [TypegooseModule.forFeature([Tag]), forwardRef(() =>OfferModule)],
  providers: [TagService],
  controllers: [TagController],
  exports: [TagService]
})
export class TagModule {}
