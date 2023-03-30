import { createAction, props } from '@ngrx/store';
import { Set, SetForm } from 'src/app/food/set/models/set.model';
const SET_SET = '[Show All Set Component] set set';
const ADD_SET = '[AddSet Component] create set';
export const addset = createAction(ADD_SET, props<{ set: Set }>());
export const setSet = createAction(
  SET_SET,
  props<{ sets: Set[]; totalSets: number }>()
);
/***async***/
const GET_SET = '[Show All Set Component] get set ';
const ADD_ASYNC_SET = '[AddSet Component] create new set';
const LOAD_SETS = '[Show all Set Component] load all set';
export const getSet = createAction(GET_SET);
export const loadSets = createAction(
  LOAD_SETS,
  props<{ page: number; pageSize: number }>()
);
export const createSet = createAction(ADD_ASYNC_SET, props<{ set: SetForm }>());
