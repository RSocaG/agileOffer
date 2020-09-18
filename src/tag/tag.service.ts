import { Injectable, ConflictException, Inject, forwardRef } from '@nestjs/common';
import { Tag } from './models/tag.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { TagDto } from './dto/tag.dto';
import { Offer } from '../offer/models/offer.model';
import { ObjectId } from 'bson';
import { OfferService } from '../offer/offer.service';

@Injectable()
export class TagService {
    constructor(
        @InjectModel(Tag) private readonly tagModel: ReturnModelType <typeof Tag>,
        @Inject(forwardRef(() =>OfferService))
        private readonly offerService: OfferService
    ){}
     
     async getTags(): Promise<Tag[]>{
        const tags = await this.tagModel.find({active: true });
        return tags;
    }

    async getTag(tagId: string ): Promise<Tag>{
        const tag = await this.tagModel.findById(tagId);
        return tag;
    }

   async createTag(tagDto: TagDto): 
    Promise<Tag>{
        const tag = await new this.tagModel(tagDto);
        return await tag.save();
    }

    async deleteTag(tagId: string): Promise<Tag>{
        const offers: Offer[] = (await this.offerService.getOffers()).filter(
            x => x.location.toString() === tagId);

        if(offers.length > 0){
            throw new ConflictException ("Location is been used");
        }
        
        const deletedTag = await this.tagModel.findByIdAndUpdate(tagId, { active: false }, { new: true })
        .exec();
        return deletedTag;
    }

    async updateTag(tagId: string, tagDto: TagDto): Promise<Tag>{
        const updatedTag = await this.tagModel.findByIdAndUpdate(tagId, tagDto,{new: true}).exec();
        return updatedTag;
    }
}
