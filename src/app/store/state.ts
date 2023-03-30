import { FoodState } from './foodState';
import { SetState } from './setState';
import { UserState } from './userState';

export interface IState {
  foods: FoodState;
  sets: SetState;
  user: UserState;
}
