import { createSelector } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { FoodState } from '../foodState';
import { IState } from '../state';

export const selectFeature = (state: IState) => state.foods;
export const selectFoods = createSelector(
  selectFeature,
  (state: FoodState) => state.foods
);
export const selectFood = createSelector(
  selectFeature,
  (state: FoodState) => state.food
);
export const getSelectedFoods = createSelector(selectFeature, (state) =>
  state.foods.filter((el: Food) => el.ischecked)
);
