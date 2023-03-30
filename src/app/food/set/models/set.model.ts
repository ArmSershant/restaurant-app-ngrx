import { Food } from '../../food/models/food.model';

export class Set {
  constructor(
    public id: number,
    public name: string,
    public food: Array<Food>
  ) {}
}

export class SetForm {
  constructor(
    public id: number,
    public name: string,
    public food: Array<number>
  ) {}
}
