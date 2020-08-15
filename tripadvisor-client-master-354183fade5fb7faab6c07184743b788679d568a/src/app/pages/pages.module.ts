import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";

import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import {NgAutoCompleteModule} from "ng-auto-complete";
import { IndexComponent } from "./index/index.component";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BookFlightComponent } from "./book-flight/book-flight.component";
import { LandingPageContentComponent } from "./landing-page-content/landing-page-content.component";
import { BookHotelComponent } from "./book-hotel/hotel.component";
import { SortingPipe } from "./pipes/sorting.pipe";
import { StopPipe } from "./pipes/stop.pipe";
import { FilterbycompanyPipe } from "./pipes/filterbycompany.pipe";
import { RegisterpageComponent } from "./registerpage/registerpage.component";
import { LoginComponent } from "./login/login.component";
import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { RatingModule } from "ng-starrating";
import { HolidayPackageComponent } from './holiday-package/holiday-package.component';
import { HotelsortingPipe } from './pipes/hotelsorting.pipe';
import { StarsPipe } from './pipes/stars.pipe';
import { HotelfacilityPipe } from './pipes/hotelfacility.pipe';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminAddPackageComponent } from './admin-add-package/admin-add-package.component';
import { BookingComponent } from './booking/booking.component';
import { AppRoutingModule } from '../app-routing.module';
import { AngularFirestore } from '@angular/fire/firestore';
@NgModule({
  imports: [
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    NgAutoCompleteModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RatingModule,
    
    NgxSpinnerModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    IndexComponent,
    RegisterpageComponent,
    HeaderComponent,
    FooterComponent,
    BookFlightComponent,
    LandingPageContentComponent,
    BookHotelComponent,
    SortingPipe ,
    StopPipe,
    FilterbycompanyPipe,
    LoginComponent,
    HolidayPackageComponent,
    HotelsortingPipe,
    StarsPipe,
    HotelfacilityPipe,
    ForgotPasswordComponent,
    AdminAddPackageComponent,
    BookingComponent,
  ],
  exports: [
    IndexComponent,
   
    RegisterpageComponent,
    HeaderComponent
   
  ], 
  providers: [httpInterceptorProviders,AngularFirestore]
})
export class PagesModule {}
