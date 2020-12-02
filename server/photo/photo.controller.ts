import { Controller, Get, Query } from '@nestjs/common';
import { PhotoDAOService } from './services/photo-dao.service';

@Controller('photo')
export class PhotoController {
    constructor(private photoDAOService: PhotoDAOService) {

    }
    @Get()
    getAll() {
        return this.photoDAOService.findAll();
    }

}