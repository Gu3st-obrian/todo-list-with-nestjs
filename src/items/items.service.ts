import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { ItemDTO } from './dto/item.dto';

@Injectable()
export class ItemsService {
    constructor (@InjectModel('Item') private readonly itemModel:Model<Item>){}

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({_id: id});
    }

    async create(createItemDto: ItemDTO): Promise<Item> {
        const createdItem = new this.itemModel(createItemDto);
        return await createdItem.save();
    }

    async update(id: string, updateItemDTO: ItemDTO): Promise<Item> {
        const updateItem = new this.itemModel(updateItemDTO);
        return await this.itemModel.findByIdAndUpdate(id, updateItemDTO, { new: true });
    }

    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id);
    }
}
