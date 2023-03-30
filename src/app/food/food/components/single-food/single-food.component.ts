import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getFetchedSingleFood } from 'src/app/store/foodStore/food.actions';
import { selectFood } from 'src/app/store/foodStore/food.selectors';
import { IState } from './../../../../store/state';

@Component({
  selector: 'app-single-food',
  templateUrl: './single-food.component.html',
  styleUrls: ['./single-food.component.css'],
})
export class SingleFoodComponent {
  constructor(private store: Store<IState>, private route: ActivatedRoute) {}
  public food$ = this.store.select(selectFood);
  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(getFetchedSingleFood({ id }));
    });
  }
}
