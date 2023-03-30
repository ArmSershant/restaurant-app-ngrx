import { Food } from 'src/app/food/food/models/food.model';

export interface FoodState {
  foods: Food[];
  food: Food;
}
