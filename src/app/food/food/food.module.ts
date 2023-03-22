import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { AddnewfoodComponent } from './components/addnewfood/addnewfood.component';
import { FormsModule } from '@angular/forms';
import { FoodReducer } from 'src/app/store/foodStore/food.reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AddnewfoodComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('foods', FoodReducer),
    FoodRoutingModule,
  ],
})
export class FoodModule {}
