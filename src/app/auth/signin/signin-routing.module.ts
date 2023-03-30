import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/app/user/profile/profile.component';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  { path: 'app-signin', component: SigninComponent },
  { path: 'app-profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninRoutingModule {}
