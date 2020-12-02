import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
