import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from "nestjs-typegoose";
import { OfferModule } from './offer/offer.module';
import { CompanyModule } from './company/company.module';
import { TagModule } from './tag/tag.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [ TypegooseModule.forRoot('mongodb://localhost:27017/pruebamongodb', {useNewUrlParser: true, useFindAndModify: false} ), OfferModule, CompanyModule, TagModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
