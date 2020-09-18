import { Type } from '@nestjs/common';
import { Deal } from './models/deal.model';
import { DealDto } from './dto/deal.dto';
import { ReturnModelType } from '@typegoose/typegoose';
import { StateService } from '../state/state.service';
import { CompanyService } from '../company/company.service';
import { ContactService } from '../contact/contact.service';
declare const DealService_base: Type<import("../mongo-rest/src/interfaces").ICrudService>;
export declare class DealService extends DealService_base {
    private readonly dealModel;
    private readonly stateService;
    private readonly companyService;
    private readonly contactService;
    constructor(dealModel: ReturnModelType<typeof Deal>, stateService: StateService, companyService: CompanyService, contactService: ContactService);
    create(dto: DealDto): Promise<Deal>;
}
export {};
