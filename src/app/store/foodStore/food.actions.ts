import { createAction, props } from '@ngrx/store';
import { Food } from './../../food/food/models/food.model';

const ADD_FOOD = '[AddGroup Component] create food';
const CHANGE_CHECKED = '[AddGroup Component] change checked';
export const addfood = createAction(ADD_FOOD, props<{ food: Food }>());
export const changeChecked = createAction(
  CHANGE_CHECKED,
  props<{ id: string }>()
);
