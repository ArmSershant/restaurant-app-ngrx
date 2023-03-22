import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetRoutingModule } from './set-routing.module';
import { AddnewsetComponent } from './components/addnewset/addnewset.component';
import { ShowallsetComponent } from './pages/showallset/showallset.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { SetReducer } from 'src/app/store/setStore/set.reducers';
import { SingleSetComponent } from './pages/single-set/single-set.component';
import { FoodCategoryFilterPipe } from '../food/pipes/filter.pipe';
import { SumPipe } from '../food/pipes/sum.pipe';

@NgModule({
  declarations: [
    AddnewsetComponent,
    ShowallsetComponent,
    SingleSetComponent,
    FoodCategoryFilterPipe,
    SumPipe
  ],
  exports: [FoodCategoryFilterPipe,SumPipe],
  imports: [
    CommonModule,
    StoreModule.forFeature('sets', SetReducer),
    SetRoutingModule,
    FormsModule,
  ],
})
export class SetModule {}
