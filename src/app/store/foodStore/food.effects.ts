import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, mergeMap } from 'rxjs';
import {
  addfood,
  createFood,
  getFetchedSingleFood,
  getFood,
  getSingleFood,
} from 'src/app/store/foodStore/food.actions';
import { FoodService } from './../../food/food/services/food.service';
import { setFood } from './food.actions';
@Injectable()
export class FoodEffects {
  loadFoods$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFood),
      exhaustMap(() =>
        this.foodService.fetchFood().pipe(
          map((foods) => {
            console.log(foods);
            return setFood({ foods });
          })
        )
      )
    )
  );

  addFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFood),
      mergeMap((action) =>
        this.foodService
          .fetchAddFood(action.food)
          .pipe(map((res) => addfood({ food: res })))
      )
    )
  );

  getOneFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFetchedSingleFood),
      exhaustMap((action) =>
        this.foodService
          .fetchSingleFood(action.id)
          .pipe(map((res) => getSingleFood({ food: res })))
      )
    )
  );

  constructor(private actions$: Actions, private foodService: FoodService) {}
}
