import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricePlansComponent } from './pages/price-plans/price-plans.component';

const routes: Routes = [
  {
    path: '',
    component: PricePlansComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
