import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemDTO } from './dto/item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){}

    @Get()
    async findall(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post()
    async create(@Body() createItemDto: ItemDTO): Promise<Item> {
        return this.itemsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Body() updateItemDto: ItemDTO, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<String> {
        this.itemsService.delete(id);
        return "Task ID " + id + " deleted successfully.";
    }
}
