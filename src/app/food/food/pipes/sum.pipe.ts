import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './../models/food.model';

@Pipe({name: 'sum'})
export class SumPipe implements PipeTransform {
  transform(items: any[], attr: string): number {
    return items.reduce((a, b) => a + +b[attr], 0);
  }
}
