import { createSelector } from '@ngrx/store';
import { SetState } from '../setState';
import { IState } from '../state';
export const selectFeature = (state: IState) => state.sets;
export const selectSets = createSelector(
  selectFeature,
  (state: SetState) => state.sets
);
