import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewsetComponent } from './components/addnewset/addnewset.component';
import { ShowallsetComponent } from './pages/showallset/showallset.component';
import { SingleSetComponent } from './pages/single-set/single-set.component';

const routes: Routes = [
  { path: 'app-addnewset', component: AddnewsetComponent },
  { path: 'app-showallset', component: ShowallsetComponent },
  { path: 'app-single-set/:id', component: SingleSetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetRoutingModule {}
