import { Component, OnInit } from "@angular/core";
import { AddPackage } from "../holiday-package/AddPackage";
import { Holiday } from "../holiday-package/Holiday";
import { HolidayPackageServiceService } from "../service/holiday-package-service.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: "app-admin-add-package",
  templateUrl: "./admin-add-package.component.html",
  styleUrls: ["./admin-add-package.component.scss"]
})
export class AdminAddPackageComponent implements OnInit {
  addPackage = new AddPackage();
  cities: Holiday[] = [];
  destination: any;
  message: any;
  statusFlag = false;
  constructor(
    private holidayService: HolidayPackageServiceService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.holidayService.getHolidayCities().subscribe(data => {
      for (let i = 0; i < data.holidaycities.length; i++) {
        var holiday = new Holiday();
        holiday.city = data.holidaycities[i].city_name;
        this.cities.push(holiday);
      }
      this.destination = this.cities[1];
    });
  }
  onSubmit() {
    console.log(this.addPackage);
    console.log(this.destination.city);
    
    this.statusFlag = false;
    this.spinner.show();
    if (
      this.addPackage.budget &&
      this.addPackage.days &&
      this.addPackage.nights &&
      this.addPackage.packageName  &&      
      this.addPackage.packageType  &&
      this.addPackage.package_activity  &&
      this.addPackage.package_description  &&
      this.addPackage.package_highlight  
    ) {
      this.holidayService
        .addPackage(this.addPackage, this.destination.city)
        .subscribe(
          data => {
            this.message = "Added Successfully";
            this.statusFlag = true;
            this.spinner.hide();
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          },
          error => {
            this.spinner.hide();
            this.message = "Sorry we are facing issues, try again later.";
            this.statusFlag = true;
            setTimeout(() => {
              window.location.reload();
            }, 3000);
          }
        );
    } else {
      this.spinner.hide();
      setTimeout(() => {
        this.statusFlag = false;
      }, 3000);

      this.statusFlag = true;
      this.message =
        "Some fields are empty, make sure everything is properly filled";
    }
  }
}
