import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgAutoCompleteModule } from "ng-auto-complete";
import { PagesModule } from "./pages/pages.module";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";

import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { HeaderComponent } from './pages/header/header.component';
@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    NgAutoCompleteModule,
    
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,

    PagesModule
  ],
  exports: [
   AppComponent,
    
    RouterModule
   
  ], 
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
