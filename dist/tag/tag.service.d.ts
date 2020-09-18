import { Tag } from './models/tag.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { TagDto } from './dto/tag.dto';
import { OfferService } from '../offer/offer.service';
export declare class TagService {
    private readonly tagModel;
    private readonly offerService;
    constructor(tagModel: ReturnModelType<typeof Tag>, offerService: OfferService);
    getTags(): Promise<Tag[]>;
    getTag(tagId: string): Promise<Tag>;
    createTag(tagDto: TagDto): Promise<Tag>;
    deleteTag(tagId: string): Promise<Tag>;
    updateTag(tagId: string, tagDto: TagDto): Promise<Tag>;
}
