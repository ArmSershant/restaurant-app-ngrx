import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsetComponent } from './components/addnewset/addnewset.component';
import { ShowallsetComponent } from './pages/showallset/showallset.component';
import { SingleFoodComponent } from '../food/components/single-food/single-food.component';

const routes: Routes = [
  { path: 'app-addnewset', component: AddnewsetComponent },
  { path: 'app-showallset', component: ShowallsetComponent },
  { path: 'app-single-food/:id', component: SingleFoodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetRoutingModule {}
