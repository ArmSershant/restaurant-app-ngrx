import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { getSelectedFoods } from 'src/app/store/foodStore/food.selectors';
import { Set } from '../../models/set.model';

@Component({
  selector: 'app-showallset',
  templateUrl: './showallset.component.html',
  styleUrls: ['./showallset.component.css'],
})
export class ShowallsetComponent {
  sets$ = this.store.select((state) => state.sets);
  public foods!: any;
  foods$ = this.foodStore.select(getSelectedFoods).subscribe((data) => {
    this.foods = data;
  });
  constructor(
    private store: Store<{ sets: Set[] }>,
    private foodStore: Store<{ foods: Food[] }>
  ) {}
}
