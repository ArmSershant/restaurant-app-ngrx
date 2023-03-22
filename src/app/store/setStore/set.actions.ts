import { createAction, props } from '@ngrx/store';
import { Set } from 'src/app/food/set/models/set.model';
export const addset = createAction(
  '[AddGroup Component] create set',
  props<{ set: Set }>()
);
