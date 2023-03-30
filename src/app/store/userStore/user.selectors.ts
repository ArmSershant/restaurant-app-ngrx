import { createSelector } from '@ngrx/store';
import { IState } from '../state';
import { UserState } from '../userState';

export const selectFeature = (state: IState) => state.user;
export const selectUser = createSelector(selectFeature, (state: UserState) => {
  return state.user;
});
