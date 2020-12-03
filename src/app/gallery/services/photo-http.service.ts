import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from 'interface/photo';

@Injectable()
export class PhotoHttpService {

    constructor(
        private http: HttpClient
    ) { }

    getAllWithPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>('/api/photo');
    }
}