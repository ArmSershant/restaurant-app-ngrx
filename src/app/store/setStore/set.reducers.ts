import { createReducer, on } from '@ngrx/store';
import { Set } from './../../food/set/models/set.model';
import { addset } from './set.actions';
export const initialState: Set[] = [];
export const SetReducer = createReducer(
  initialState,
  on(addset, (state, action) => [...state, action.set])
);
