import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addfood } from 'src/app/store/foodStore/food.actions';
import { Food } from '../../models/food.model';

@Component({
  selector: 'app-addnewfood',
  templateUrl: './addnewfood.component.html',
  styleUrls: ['./addnewfood.component.css'],
})
export class AddnewfoodComponent {
  constructor(
    private store: Store<{ foods: Food[] }>,
    private router: Router
  ) {}
  public categories: string[] = [
    'breakfast',
    'brunch',
    'elevenses',
    'lunch',
    'tea',
    'supper',
    'dinner',
  ];
  food: Food = {
    id: '',
    name: '',
    price: null,
    description: '',
    category: '',
    ischecked: false,
  };
  onSubmit(form: NgForm) {
    let food = new Food(
      Math.floor(Math.random() * 1001).toString(),
      form.value.name,
      form.value.price,
      form.value.description,
      form.value.category,
      false
    );
    this.store.dispatch(addfood({ food }));
    form.resetForm();
    this.router.navigate(['/app-addnewset']);
  }
}
