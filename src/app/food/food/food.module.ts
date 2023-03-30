import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { AddnewfoodComponent } from './components/addnewfood/addnewfood.component';
import { FormsModule } from '@angular/forms';
import { FoodReducer } from 'src/app/store/foodStore/food.reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { SingleFoodComponent } from './components/single-food/single-food.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [AddnewfoodComponent, SingleFoodComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature('foods', FoodReducer),
    EffectsModule.forFeature(),
    FoodRoutingModule,
    NgxPaginationModule
  ],
})
export class FoodModule {}
