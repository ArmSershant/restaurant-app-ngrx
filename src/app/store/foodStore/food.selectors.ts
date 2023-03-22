import { createSelector } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { foodState } from '../foodState';

export const selectFeature = (state: foodState) => state.foods;
export const getFoodsById = createSelector(
  selectFeature,
  (state: Food[], props: { id: string }) =>
    state.filter((el: Food) => el.id === props.id)
);

export const getSelectedFoods = createSelector(
  selectFeature,
  (state: Food[]) => {
    return state.filter((el: Food) => el.ischecked);
  }
);
