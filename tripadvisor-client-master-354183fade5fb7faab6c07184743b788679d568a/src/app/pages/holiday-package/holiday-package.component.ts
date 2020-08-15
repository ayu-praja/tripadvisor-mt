import { Component, OnInit, Inject } from "@angular/core";
import { HolidayPackageServiceService } from "../service/holiday-package-service.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as moment from "moment";
import { Holiday } from "./Holiday";

import { TokenStorageService } from "../auth/token-storage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
@Component({
  selector: "app-holiday-package",
  templateUrl: "./holiday-package.component.html",
  styleUrls: ["./holiday-package.component.scss"]
})
export class HolidayPackageComponent implements OnInit {
  cities: Holiday[] = [];
  overlayStatus = false;
  errorStatus = false;
  clearOnButtonClick = false;
  dateMistake = false;
  errorMessage: any;
  overlayData: any;
  source: any;
  destination: any;
  minDate: Date;
  maxDate: Date;
  sourcecheck = false;
  date: any;
  bsValue = new Date();
  holiday: any;
  packages: any[] = [];
  difference: any;
  images: any[] = [];
  highlights: any[] = [];
  currentDate: any;
  currentTime: any;
  weatherData: any;
  packageId: number;
  successful = false;
  message: string;
  cardDetailsForm: FormGroup;
  constructor(
    @Inject(HolidayPackageServiceService)
    private holidayService: HolidayPackageServiceService,
    private spinner: NgxSpinnerService,
    private username: TokenStorageService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 30);
  }

  ngOnInit() {
    this.cardDetailsForm = this.formBuilder.group({
      cardNumber: ["", Validators.required,Validators.maxLength(18)],
      cvv: ["", Validators.required,Validators.maxLength(3)]
    });
    this.holidayService.getHolidayCities().subscribe(data => {
      for (let i = 0; i < data.holidaycities.length; i++) {
        var holiday = new Holiday();
        holiday.city = data.holidaycities[i].city_name;
        this.cities.push(holiday);
      }
      this.destination = this.cities[1];
    });
    this.currentDate = moment(new Date()).format("DD-MM-YYYY");
    this.currentTime = moment().format("LT");
  }
  openNav(d) {
    document.getElementById("myNav").style.width = "100%";
    this.overlayData = d;
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  enableFilter() {
    // if (this.source === this.destination.city) {
    //   this.sourcecheck = true;
    // } else {
    //   this.sourcecheck = false;
    // }

    this.clearOnButtonClick = true;
    this.spinner.show();
    var now = new Date();
    var now2 = new Date(this.date);
    // console.log(now);
    var a = moment(now);
    var b = moment(now2);
    this.difference = b.diff(a, "days");
    // console.log(this.difference);
    this.errorStatus = false;
    // console.log(this.destination);

    if (this.difference >= 0) {
      this.errorStatus = false;
      this.dateMistake = false;
      this.holidayService.getPackage(this.destination.city).subscribe(
        data => {
          this.clearOnButtonClick = false;
          // this.dateMistake=true;
        
          this.holiday = data;
          console.log(data);

          // this.childPackage.getPlace(this.holiday);
          this.packages = this.holiday.packages;
          console.log(this.packages);
          for (let i = 0; i < this.packages.length; i++) {
            this.images[i] = this.packages[i].package_image.split("|");
            this.packages[i]["imageurl"] = this.images[i];
          }
          for (let i = 0; i < this.packages.length; i++) {
            this.highlights[i] = this.packages[i].package_highlight.split("|");
            this.packages[i]["highlight"] = this.highlights[i];
          }
          this.overlayStatus = true;
          this.holidayService
            .getWeather(this.holiday.destination)
            .subscribe(data => {
              this.weatherData = data;
              console.log(data);
              this.spinner.hide();
            });
        },
        error => {
          this.clearOnButtonClick = false;
          this.errorStatus = true;
          // this.dateMistake=true;
          this.errorMessage = error;
          console.log(error);
          this.overlayStatus = true;
          this.spinner.hide();

        }
      );
    } else {
      this.dateMistake = true;
      this.overlayStatus = true;
    }
  }
  booking() {
    this.spinner.show();
    this.packageId = this.overlayData.packageId;
    if(this.tokenStorage.getUsername()){
      var username = this.tokenStorage.getUsername();
    }
    else{
      var username=localStorage.getItem('name');
    }
    
    // var date1 = moment(new Date(this.date)).format("YYYY-MM-DD");
    var date1 = moment(new Date(this.date)).format("YYYY-MM-DD");

    this.holidayService.booking(this.packageId, username, date1).subscribe(
      data => {
        this.spinner.hide();
        this.successful = true;
        this.message = "Booking Successful, Check your mail for details";
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      error => {
        this.spinner.hide();
        this.successful = true;
        this.message = "Please login with your email instead of Social login in order to use this feature. Thank You.";
        // console.log(this.message);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        
      }
    );
  }
}
