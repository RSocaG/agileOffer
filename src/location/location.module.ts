import { Module, forwardRef } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Location } from './models/location.model';
import { OfferModule } from '../offer/offer.module';

@Module({
  imports: [TypegooseModule.forFeature([Location]), forwardRef(() =>OfferModule)],
  controllers: [LocationController],
  providers: [LocationService],
  exports: [LocationService]
})
export class LocationModule {}
