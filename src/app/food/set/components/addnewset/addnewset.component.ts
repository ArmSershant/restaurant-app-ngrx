import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Food } from 'src/app/food/food/models/food.model';
import { NgForm } from '@angular/forms';
import { Set } from '../../models/set.model';
import { Router } from '@angular/router';
import { addset } from 'src/app/store/setStore/set.actions';
import { changeChecked } from 'src/app/store/foodStore/food.actions';
import { getSelectedFoods } from './../../../../store/foodStore/food.selectors';
@Component({
  selector: 'app-addnewset',
  templateUrl: './addnewset.component.html',
  styleUrls: ['./addnewset.component.css'],
})
export class AddnewsetComponent {
  public foods$ = this.store.select((state) => state.foods);
  public set: Set = {
    id: '',
    name: '',
    foods: [],
  };
  public notEnoughChecked = false;
  public categories: string[] = [
    'breakfast',
    'brunch',
    'elevenses',
    'lunch',
    'tea',
    'supper',
    'dinner',
    'all',
  ];
  public isSelected!: Boolean;
  public selectedCategory!: string;
  constructor(
    private store: Store<{ foods: Food[] }>,
    private router: Router
  ) {}
  onCheck(id: string) {
    this.store.dispatch(changeChecked({ id }));
  }
  onCategoryChange(category: string) {
    this.selectedCategory = category;
  }
  onSave(form: NgForm) {
    this.store.select(getSelectedFoods).subscribe((data) => {
      let sets = data.map((el) => el.id);
      if (sets.length < 2) {
        this.notEnoughChecked = true;
      } else {
        this.notEnoughChecked = false;
        let set = new Set(
          Math.floor(Math.random() * 1001).toString(),
          form.value.name,
          sets
        );
        form.resetForm();
        this.store.dispatch(addset({ set }));
        this.router.navigate(['/app-showallset']);
      }
    });
  }
}
