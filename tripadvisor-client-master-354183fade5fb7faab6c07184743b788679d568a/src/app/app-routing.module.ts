import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";

import { BookFlightComponent } from "./pages/book-flight/book-flight.component";
import { BookHotelComponent } from "./pages/book-hotel/hotel.component";
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { LoginComponent } from "./pages/login/login.component";
import { HolidayPackageComponent } from './pages/holiday-package/holiday-package.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { AuthGuardService } from './pages/auth/auth-guard.service';
import { AdminAddPackageComponent } from './pages/admin-add-package/admin-add-package.component';
import { BookingComponent } from './pages/booking/booking.component';


const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: IndexComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "book-flight", component: BookFlightComponent ,canActivate: [AuthGuardService]},
  { path: "book-hotel", component: BookHotelComponent,canActivate: [AuthGuardService] },
  { path: "auth/login", component: LoginComponent },
  { path: "holiday-package", component:HolidayPackageComponent,canActivate: [AuthGuardService]},
  { path: "forgot-password", component:ForgotPasswordComponent},
  { path: "add-package", component:AdminAddPackageComponent,canActivate:[AuthGuardService]},
  { path: "booking", component:BookingComponent,canActivate:[AuthGuardService]}
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
