import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodModule } from './food/food/food.module';
import { FoodCategoryFilterPipe } from './food/food/pipes/filter.pipe';
import { SetModule } from './food/set/set.module';
import { FoodReducer } from './store/foodStore/food.reducers';
import { SetReducer } from './store/setStore/set.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SetModule,
    FoodModule,
    StoreModule.forRoot({ foods: FoodReducer, sets: SetReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
