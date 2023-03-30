import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodModule } from './food/food/food.module';
import { SetModule } from './food/set/set.module';
import { FoodReducer } from './store/foodStore/food.reducers';
import { SetReducer } from './store/setStore/set.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './store/foodStore/food.effects';
import { setEffects } from './store/setStore/set.effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { SigninModule } from './auth/signin/signin.module';
import { SignupModule } from './auth/signup/signup.module';
import { ProfileComponent } from './user/profile/profile.component';
import { UserEffects } from './store/userStore/user.effects';
import { UserReducer } from './store/userStore/user.reducers';

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SetModule,
    FoodModule,
    SigninModule,
    SignupModule,
    StoreModule.forRoot({
      foods: FoodReducer,
      sets: SetReducer,
      user: UserReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([FoodEffects, setEffects, UserEffects]),
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
