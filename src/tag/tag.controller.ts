import { Controller, NotFoundException ,HttpStatus,  Get, Post, Put, Delete, Body, Param, Res, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDto } from './dto/tag.dto';
import { Tag } from './models/tag.model';
import { ApiTags } from '@nestjs/swagger';

@Controller('tag')
@ApiTags('Tag')
export class TagController {
    constructor(private readonly tagService: 
        TagService){}

    @Post()
    async createTag(@Res() res, @Body() tagDto: 
    TagDto): Promise<Tag>{
        const tag = await this.tagService.createTag(tagDto);
        return res.status(HttpStatus.OK).json({
            message: 'Tag Successfully Created',
            tag
        });
    }

    @Get()
    async getTags(@Res() res):Promise<Tag[]>{
        const tags = await this.tagService.getTags();
        return res.status(HttpStatus.OK).json({
            tags
        });
    }

    @Get(':id')
    async getTag(@Res() res, @Param('id') tagID: string):Promise<Tag> {
        const tag = 
        await this.tagService.getTag(tagID);

        if(!tag){
            throw new NotFoundException('Tag does not exist');
        }

        return res.status(HttpStatus.OK).json({
            tag
        });
    }


    @Delete(':id')
    async deleteTag(@Res() res, 
    @Param('id') tagID: string):Promise<Tag>{
        const tagDeleted = await this.tagService.deleteTag(tagID);
        if(!tagDeleted){
            throw new NotFoundException('Tag does not exist');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Tag Deleted Successfully',
            tag: tagDeleted
        });
    }

    @Put(':id')
    async updateTag(@Res() res, 
    @Body() tagDto: TagDto,
    @Param('id') tagID: string):Promise<Tag>{
    const updatedTag = await this.tagService.updateTag(tagID, tagDto);
    if(!updatedTag){
        throw new NotFoundException('Tag does not exist');
    }
    return res.status(HttpStatus.OK).json({
        message: 'Tag Updated Successfully',
        tag: updatedTag
    });
    }
}
