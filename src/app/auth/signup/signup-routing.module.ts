import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SigninComponent } from './../signin/signin.component';

const routes: Routes = [
  { path: 'app-signup', component: SignupComponent },
  { path: 'app-signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule {}
