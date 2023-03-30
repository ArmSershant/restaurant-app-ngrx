import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgForm } from '@angular/forms';
import { SetForm } from '../../models/set.model';
import { Router } from '@angular/router';
import { createSet } from 'src/app/store/setStore/set.actions';
import { changeChecked, getFood } from 'src/app/store/foodStore/food.actions';
import {
  getSelectedFoods,
  selectFoods,
} from './../../../../store/foodStore/food.selectors';
import { IState } from './../../../../store/state';
@Component({
  selector: 'app-addnewset',
  templateUrl: './addnewset.component.html',
  styleUrls: ['./addnewset.component.css'],
})
export class AddnewsetComponent {
  public foods$ = this.store.select(selectFoods);
  public set: SetForm = {
    id: 0,
    name: '',
    food: [],
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
  constructor(private store: Store<IState>, private router: Router) {}
  ngOnInit() {
    this.store.dispatch(getFood());
  }
  onCheck(id: number) {
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
        let set = new SetForm(
          Math.floor(Math.random() * 1001),
          form.value.name,
          sets
        );
        form.resetForm();
        this.store.dispatch(createSet({ set }));
        this.router.navigate(['/app-showallset']);
      }
    });
  }
}
