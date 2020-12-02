import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoEntity } from './photo.entity';
import { PhotoController } from './photo.controller';
import { PhotoDAOService } from './services/photo-dao.service';

@Module({
    imports: [TypeOrmModule.forFeature([PhotoEntity])],
    providers: [PhotoDAOService],
    controllers: [PhotoController],
})
export class PhotoModule { }
