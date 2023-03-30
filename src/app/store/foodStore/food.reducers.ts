import { createReducer, on } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { addfood, changeChecked, setFood, getSingleFood } from './food.actions';
import { FoodState } from '../foodState';
export const initialState: FoodState = {
  foods: [],
  food: {} as Food,
};

export const FoodReducer = createReducer(
  initialState,
  on(changeChecked, (state, { id }) => {
    return {
      ...state,
      foods: state.foods.map((el: Food) =>
        el.id == id ? { ...el, ischecked: !el.ischecked } : el
      ),
    };
  }),
  on(addfood, (state, { food }) => ({
    ...state,
    foods: [...state.foods, food],
  })),
  on(setFood, (state, { foods }) => ({ ...state, foods: foods })),
  on(getSingleFood, (state, { food }) => ({ ...state, food: food }))
);
