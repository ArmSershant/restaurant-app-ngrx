import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
import { SetService } from 'src/app/food/set/services/set.service';
import { addset, createSet, getSet, loadSets, setSet } from './set.actions';
@Injectable()
export class setEffects {
  loadSets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSets),
      switchMap(({ page, pageSize }) =>
        this.setService.fetchSet(page, pageSize).pipe(
          map(({ sets, totalSets }) => {
            return setSet({ sets, totalSets });
          })
        )
      )
    )
  );

  addSet$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSet),
      mergeMap((action) =>
        this.setService
          .fetchAddSet(action.set)
          .pipe(map((res) => addset({ set: res })))
      )
    )
  );
  constructor(private actions$: Actions, private setService: SetService) {}
}
