import { createAction, props } from '@ngrx/store';
import { Food } from './../../food/food/models/food.model';

const SET_FOOD = '[Food Component] set food';
const CHANGE_CHECKED = '[Food Component] change checked';
const ADD_FOOD = '[Food Component] add food';
const GET_SINGLE_FOOD = '[Food Component] get single food';
export const addfood = createAction(ADD_FOOD, props<{ food: Food }>());
export const changeChecked = createAction(
  CHANGE_CHECKED,
  props<{ id: number }>()
);
export const setFood = createAction(SET_FOOD, props<{ foods: Food[] }>());
export const getSingleFood = createAction(
  GET_SINGLE_FOOD,
  props<{ food: Food }>()
);
/***async***/
const GET_FOOD = '[Food Component] get food';
const ADD_ASYNC_FOOD = '[Food Component] add fetched food';
const GET_ASYNC_SINGLE_FOOD = '[Food Component] get single fetched food';
export const getFood = createAction(GET_FOOD);
export const createFood = createAction(ADD_ASYNC_FOOD, props<{ food: Food }>());
export const getFetchedSingleFood = createAction(
  GET_ASYNC_SINGLE_FOOD,
  props<{ id: number }>()
);
