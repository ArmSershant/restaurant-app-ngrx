import { createReducer, on } from '@ngrx/store';
import { SetState } from '../setState';
import { addset, setSet } from './set.actions';
export const initialState: SetState = {
  sets: [],
};

export const SetReducer = createReducer(
  initialState,
  on(addset, (state, action) => ({
    ...state,
    sets: [...state.sets, action.set],
  })),
  on(setSet, (state, { sets }) => ({ ...state, sets: sets }))
);
