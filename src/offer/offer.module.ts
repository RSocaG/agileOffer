import { Module, forwardRef } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { TypegooseModule } from "nestjs-typegoose";
import { Offer } from './models/offer.model';
import { CompanyModule } from '../company/company.module';
import { LocationModule } from '../location/location.module';
import { TagModule } from '../tag/tag.module';

@Module({
    imports: [TypegooseModule.forFeature([Offer]), CompanyModule, LocationModule, forwardRef(() =>TagModule) ],
    controllers: [OfferController],
    providers: [OfferService],
    exports: [OfferService],
})
export class OfferModule {}
