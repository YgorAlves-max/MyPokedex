
import { NgModule } from '@angular/core';

//Routes
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';

//Pages
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
