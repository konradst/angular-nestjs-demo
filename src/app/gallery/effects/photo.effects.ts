import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadPhotos } from '../actions/photo.actions';
import { switchMap, map } from 'rxjs/operators';
import { PhotoHttpService } from '../services/photo-http.service';

@Injectable()
export class PhotoEffects {

  constructor(
    private actions$: Actions,
    private photoHttpService: PhotoHttpService
  ) { }

  getAllPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Photo/API] Get All Photos'),
      switchMap(() => {
        return this.photoHttpService.getAllWithPhotos().pipe(
          map((photos) => loadPhotos({ photos }))
        );
      })
    ));

}
