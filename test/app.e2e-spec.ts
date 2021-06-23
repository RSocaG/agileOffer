import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { OfferDto } from './../src/offer/dto/offer.dto';
import { EmploymentType } from './../src/offer/models/employmentType.enum';
import { CompanyDto } from './../src/company/dto/company.dto';
import { TypegooseModule } from 'nestjs-typegoose';
import { Company } from './../src/company/models/company.model';
import { LocationDto } from './../src/location/dto/location.dto';
import { TagDto } from './../src/tag/dto/tag.dto';
import { Tag } from './../src/tag/models/tag.model';
import { Location } from './../src/location/models/location.model';
import { LocationService } from './../src/location/location.service';
import { CompanyService } from './../src/company/company.service';
import { TagService } from './../src/tag/tag.service';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let locationService: LocationService;
  let companyService: CompanyService;
  let tagService: TagService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TypegooseModule.forFeature([Company, Tag, Location])],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    locationService = await moduleFixture.get<LocationService>(LocationService);
    companyService = await moduleFixture.get<CompanyService>(CompanyService);
    tagService = await moduleFixture.get<TagService>(TagService);
  });

  it('/ POST create a company', async() => {
    const dto: CompanyDto = {
      name: "Google",
      offers: ["Full stack Developer"],
      relatedImage: "image"
    };
    const response =  await request(app.getHttpServer())
      .post('/company')
      .send(dto)
      .expect(200);
      expect(response.body).toHaveProperty('message', 'Company Successfully Created');
      expect(response.body).toHaveProperty('company');
      expect(response.body.company).toHaveProperty('offers');
      expect(response.body.company).toHaveProperty('name', 'Google');
      expect(response.body.company).toHaveProperty('relatedImage', 'image');
  });

  it('/ POST create a location', async() => {
    const dto: LocationDto = {
      name: 'Spain'
    }
    const response =  await request(app.getHttpServer())
      .post('/location')
      .send(dto)
      .expect(200);
      expect(response.body).toHaveProperty('message', 'Location Successfully Created');
      expect(response.body.location).toHaveProperty('name', 'Spain');
  });

  it('/ POST create a tag', async() => {
    const dto: TagDto = {
      name: "Developer"
    }
    const response =  await request(app.getHttpServer())
      .post('/tag')
      .send(dto)
      .expect(200);
      expect(response.body).toHaveProperty('message', 'Tag Successfully Created');
      expect(response.body.tag).toHaveProperty('name', 'Developer');
  });

  it('/ POST create an offer', async() => {
    const tag = await tagService.getTags();
    const company = await companyService.getCompanys();
    const location = await locationService.getLocations();
    
    
    const dto: OfferDto = {
      name: "Full Stack Developer",
      company: company[0].id,
      employmentType: EmploymentType.FullTime,
      tags: [tag[0].id],
      location: location[0].id
    }
    const response =  await request(app.getHttpServer())
      .post('/offer')
      .send(dto)
      .expect(200);
      expect(response.body).toHaveProperty('message', 'Offer Successfully Created');
      expect(response.body).toHaveProperty('offer');
      expect(response.body.offer).toHaveProperty('tags');
      expect(response.body.offer).toHaveProperty('name', 'Full Stack Developer');
      expect(response.body.offer).toHaveProperty('company');
      expect(response.body.offer).toHaveProperty('location');
      expect(response.body.offer).toHaveProperty('employmentType', "Full Time");
  });
});
