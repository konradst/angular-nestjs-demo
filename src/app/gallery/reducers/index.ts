import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as fromPhotos from './photo.reducer';
import * as PhotoActions from '../actions/photo.actions';

export const galleryFeatureKey = 'gallery';

export interface State {
  photos: fromPhotos.State;
}

export const reducers: ActionReducerMap<State> = {
  photos: fromPhotos.reducer
};

// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectGalleryState = createFeatureSelector<State>(galleryFeatureKey);

export const selectPhotos = createSelector(selectGalleryState, (state) => state.photos);

export const selectAllPhotos = createSelector(
  selectPhotos,
  fromPhotos.selectAll
);

// export const selectGalleriesReady = createSelector(
//   selectGalleries,
//   fromPhotos.selectReady
// );