import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { Store } from '@ngrx/store';
import { Photo } from 'interface/photo';
import * as fromGallery from './reducers/index';
import { Observable } from 'rxjs';
import { getAllPhotos } from './actions/photo.actions';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private readonly title = 'Angular NestJS Demo | Gallery Page';

  private isServer: boolean = isPlatformServer(this.platformId);

  photos$: Observable<Photo[]>;

  constructor(
    private store: Store<fromGallery.State>,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {
    this.titleService.setTitle(this.title);

    if (!this.isServer) {
      this.store.dispatch(getAllPhotos());
    }
  }

  ngOnInit(): void {
    this.photos$ = this.store.select(fromGallery.selectAllPhotos);

  }

}
