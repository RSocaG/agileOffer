import { TagService } from './tag.service';
import { TagDto } from './dto/tag.dto';
import { Tag } from './models/tag.model';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    createTag(res: any, tagDto: TagDto): Promise<Tag>;
    getTags(res: any): Promise<Tag[]>;
    getTag(res: any, tagID: string): Promise<Tag>;
    deleteTag(res: any, tagID: string): Promise<Tag>;
    updateTag(res: any, tagDto: TagDto, tagID: string): Promise<Tag>;
}
