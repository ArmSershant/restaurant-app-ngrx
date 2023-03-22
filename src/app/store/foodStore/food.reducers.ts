import { createReducer, on } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { addfood, changeChecked } from './food.actions';
export const initialState: Food[] = [
  {
    id: '1',
    name: 'Food1',
    price: 100,
    description: 'Food 1 description',
    category: 'breakfast',
    ischecked: false,
  },
  {
    id: '2',
    name: 'Food2',
    price: 200,
    description: 'Food 2 description',
    category: 'brunch',
    ischecked: false,
  },
  {
    id: '3',
    name: 'Food3',
    price: 300,
    description: 'Food 3 description',
    category: 'elevenses',
    ischecked: false,
  },
  {
    id: '4',
    name: 'Food4',
    price: 400,
    description: 'Food 4 description',
    category: 'tea',
    ischecked: false,
  },
];

export const FoodReducer = createReducer(
  initialState,
  on(changeChecked, (state, { id }) => {
    return state.map((el: Food) =>
      el.id === id ? { ...el, ischecked: !el.ischecked } : el
    );
  }),
  on(addfood, (state, action) => [...state, action.food])
);
