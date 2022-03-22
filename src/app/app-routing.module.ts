import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
const routes: Routes = [
  {
    path:'customer-booking-component', component:CustomerBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
