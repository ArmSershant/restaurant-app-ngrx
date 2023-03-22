import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewfoodComponent } from './components/addnewfood/addnewfood.component';

const routes: Routes = [
  { path: 'app-addnewfood', component: AddnewfoodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodRoutingModule {}
