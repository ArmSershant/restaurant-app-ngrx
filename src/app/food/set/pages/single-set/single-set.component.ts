import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Food } from 'src/app/food/food/models/food.model';
import { getFoodsById } from 'src/app/store/foodStore/food.selectors';

@Component({
  selector: 'app-single-set',
  templateUrl: './single-set.component.html',
  styleUrls: ['./single-set.component.css'],
})
export class SingleSetComponent {
  constructor(
    private store: Store<{ foods: Food[] }>,
    private route: ActivatedRoute
  ) {}
  foods$!: Observable<any>;
  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.foods$ = this.store.select(getFoodsById, {
        id: id.toString(),
      });
    });
  }
}
