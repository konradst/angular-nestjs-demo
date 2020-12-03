import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreModule } from '@ngrx/store';
import * as fromGallery from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './effects/photo.effects';
import { PhotoHttpService } from './services/photo-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule,

    FlexLayoutModule,

    HttpClientModule,

    StoreModule.forFeature(fromGallery.galleryFeatureKey, fromGallery.reducers),
    EffectsModule.forFeature([PhotoEffects])
  ],
  providers: [
    PhotoHttpService,
  ]
})
export class GalleryModule { }
