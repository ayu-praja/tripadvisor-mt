import { Component, OnInit, ViewChild } from "@angular/core";
import { FlightService } from "../service/flight.service";
import * as moment from "moment";
import { NgxSpinnerService } from "ngx-spinner";
import { BsDatepickerModule } from "ngx-bootstrap";
import {
  CreateNewAutocompleteGroup,
  SelectedAutocompleteItem,
  NgAutoCompleteComponent
} from "ng-auto-complete";
import { Airport } from "./Aiport";
import { Router } from "@angular/router";
@Component({
  selector: "app-book-flight",
  templateUrl: "./book-flight.component.html",
  styleUrls: ["./book-flight.component.scss"]
})
export class BookFlightComponent implements OnInit {
  // source:any=source;
  // destinatio
  public completer: NgAutoCompleteComponent;
  clearOnButtonClick = false;
  dateMistake = false;
  difference: any;
  status: boolean = false;
  source: any;
  sourceCode: any;
  minDate: Date;
  maxDate: Date;
  destination: any;
  date: any;
  err: any;
  airportData: Airport[] = [];
  flightdata: any[] = [];
  sourcename: any;
  sourcecheck = false;
  noFlightCheck = false;
  link: string;
  constructor(
    private service: FlightService,
    private spinner: NgxSpinnerService
  ) {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 90);
  }

  ngOnInit() {
    this.service.getAirportCodes().subscribe(data => {
      for (let i = 0; i < data.airports.length; i++) {
        var airport = new Airport();
        airport.airportCode = data.airports[i].IATA_code;
        airport.airportName = data.airports[i].city_name;
        this.airportData.push(airport);
      }

      this.source = this.airportData[15];
      this.destination = this.airportData[27];
      // console.log(this.source);
    });
  }

  enableFilter() {
    console.log(this.source);
    if (this.source === this.destination) {
      setTimeout(() => {
        this.sourcecheck = false;
      }, 2000);
      this.sourcecheck = true;
    } else {
      this.sourcecheck = false;
    }

    this.airportData.forEach(element => {
      if (element.airportName === this.source) {
        console.log(element.airportCode);
      }
    });
    this.clearOnButtonClick = true;
    this.spinner.show();
    var now = new Date();
    const momentDate = new Date(this.date); // Replace event.value with your date value
    const formattedDate = moment(momentDate).format("YYYYMMDD");
    var a = moment(now);
    var b = moment(momentDate);
    this.difference = b.diff(a, "days");
    console.log(this.difference);
    if (this.difference >= 0) {
      this.dateMistake = false;
      this.service
        .getFlight(
          this.source.airportCode,
          this.destination.airportCode,
          formattedDate
        )
        .subscribe(
          info => {
            this.link =
              "https://www.goibibo.com/flights/air-" +
              this.source.airportCode +
              "-" +
              this.destination.airportCode +
              "-" +
              formattedDate +
              "--1-0-0-E-D/";

            this.clearOnButtonClick = false;
            this.spinner.hide();
            let infodata = info["data"];
            let flight_data = infodata["onwardflights"];
            this.flightdata = flight_data;
            if (flight_data.length === 0) {
              this.noFlightCheck = true;
              console.log(this.noFlightCheck);
            } else {
              this.noFlightCheck = false;
              console.log(this.noFlightCheck);
            }

            // console.log(this.flightdata);
          },
          error => {
            this.clearOnButtonClick = false;
            this.spinner.hide();
            this.err = "No Data Fetched";
          }
        );
    } else {
      this.dateMistake = true;
    }
    this.status = true;

    // else{
    //   this.noFlightCheck=false;
    // }
  }
}
