import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhotoEntity } from '../photo.entity';

@Injectable()
export class PhotoDAOService {
    constructor(
        @InjectRepository(PhotoEntity)
        private photoRepository: Repository<PhotoEntity>,
    ) { }

    async findAll(): Promise<PhotoEntity[]> {
        return await this.photoRepository.find();
    }

    async findOne(id: string): Promise<PhotoEntity | undefined> {
        return await this.photoRepository.findOne(id);
    }

    async findAllByQuery(query: object): Promise<PhotoEntity[]> {
        return await this.photoRepository.find({
            where: [query]
        });
    }

    async remove(id: string): Promise<void> {
        await this.photoRepository.delete(id);
    }
}