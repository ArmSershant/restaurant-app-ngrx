import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Food } from 'src/app/food/food/models/food.model';

@Pipe({
  name: 'foodCategoryFilter',
})
export class FoodCategoryFilterPipe implements PipeTransform {
  transform(foods: Observable<Food[]>, category: string) {
    if (!foods || !category || category === '') {
      return foods;
    }
    return foods.pipe(
      map((item) => item.filter((it) => it.category === category))
    );
  }
}
