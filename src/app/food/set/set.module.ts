import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetRoutingModule } from './set-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddnewsetComponent } from './components/addnewset/addnewset.component';
import { ShowallsetComponent } from './pages/showallset/showallset.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { SetReducer } from 'src/app/store/setStore/set.reducers';
import { FoodCategoryFilterPipe } from '../food/pipes/filter.pipe';
import { SumPipe } from '../food/pipes/sum.pipe';
import { EffectsModule } from '@ngrx/effects';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AddnewsetComponent,
    ShowallsetComponent,
    FoodCategoryFilterPipe,
    SumPipe,
  ],
  exports: [FoodCategoryFilterPipe, SumPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('sets', SetReducer),
    EffectsModule.forFeature(),
    NgxPaginationModule,
    SetRoutingModule,
    FormsModule,
  ],
})
export class SetModule {}
