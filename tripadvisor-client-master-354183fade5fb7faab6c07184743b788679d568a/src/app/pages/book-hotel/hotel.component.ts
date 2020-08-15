import { Component, OnInit } from "@angular/core";
import { HotelService } from "../service/hotel.service";
import * as moment from "moment";
import { HotelData } from '../modal/hotel';
import { NgxSpinnerService } from "ngx-spinner";
import { HotelCity } from './HotelCity';
import { Holiday } from '../holiday-package/Holiday';
import { Router } from '@angular/router';
// import { StarRatingComponent } from 'ng-starrating';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: "app-hotel",
  templateUrl: "./hotel.component.html",
  styleUrls: ["./hotel.component.scss"]
})
export class BookHotelComponent implements OnInit {
  hoteldata: HotelData[] = [];
  dateFrom: any;
  cleartripurl:any[]=[]
  dateTo: any;
  errorStatus=false
  sideFilterCheck = false;
  images: any[] = [];
  facilities: any[] = [];
  city: any;
  hotelstar: any[] = [];
  overlayData: HotelData;
  formattedDateFrom:any;
  formattedDateTo:any;
  overlayStatus=false
  price;
  star1;
  star2;
  star3;
  star4;
  star5;
  aircondition;
  television;
  minDateFrom:Date
  maxDateFrom:Date
  maxDateTo:Date
  minDateTo:Date
  differenceTo:any
  // aircondition;
  ceilingfan;
  // television;
  freewifi;
  differenceFrom:any
  dateMistake=false
  cities:HotelCity[]=[]
  
  constructor(private service: HotelService,private spinner: NgxSpinnerService,private router: Router) {
    
    
    
    this.minDateFrom = new Date();
    this.maxDateFrom = new Date();
    this.maxDateTo= new Date();
    this.minDateTo= new Date();
    this.minDateFrom.setDate(this.minDateFrom.getDate());
    this.maxDateFrom.setDate(this.minDateFrom.getDate() + 90);
    this.minDateTo.setDate(this.maxDateTo.getDate()+1);
    this.maxDateTo.setDate(this.minDateTo.getDate()+91)
  }

  ngOnInit() {
    
    this.service.getHotelCities().subscribe(data=>{
      for(let i=0;i<data.hotel_cities.length;i++){
        var hotelCity=new HotelCity();
        hotelCity.city=data.hotel_cities[i].city_name;
        this.cities.push(hotelCity);
      }
      this.city=this.cities[1]
    })
   
    // this.city = this.cities;
    console.log(this.dateTo);
   
  }
  openNav(d) {
    document.getElementById("myNav").style.width = "100%";
    console.log(d.propertyName);
    this.overlayData = d;
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  enableHotellist() {

    
    this.spinner.show()
    const momentDateFrom = new Date(this.dateFrom); // Replace event.value with your date value
    this.formattedDateFrom = moment(momentDateFrom).format("DDMMYYYY"); 
    const momentDateTo = new Date(this.dateTo);
    this.formattedDateTo = moment(momentDateTo).format("DDMMYYYY");
    var now = new Date();
    var a = moment(now);
    var b = moment(momentDateFrom)
    var c = moment(momentDateTo)
    this.differenceFrom = b.diff(a, "days");
    this.differenceTo = c.diff(a, "days");
    console.log(this.differenceFrom,this.differenceTo);
    console.log(this.city.city);
    if(this.differenceFrom>=0 && this.differenceTo>=0){
      this.errorStatus=false
      this.dateMistake=false;
    this.service.getHotels(this.city.city).subscribe(
      info => {
        // console.log(this.city);        
        this.spinner.hide()
        this.sideFilterCheck = true;
        this.hoteldata = info;
        
        //console.log(this.hoteldata);
        for (let i = 0; i < this.hoteldata.length; i++) {
          this.images[i] = this.hoteldata[i].imageUrls.split("|");
          this.hotelstar[i] = this.hoteldata[i].hotelStarRating.split(" ");
          this.facilities[i] = this.hoteldata[i].roomFacilities.split("|");
          // this.cleartripurl[i]=this.hoteldata[i].pageurl.split("?");
          this.hoteldata[i]["facilities"] = this.facilities[i];
          this.hoteldata[i]["images"] = this.images[i];
          this.hoteldata[i]["hotelstar"] = this.hotelstar[i];
         //  this.hoteldata[i]["pages"]=this.cleartripurl[i]
    
        }
        for (let i = 0; i < this.hoteldata.length; i++) {
          this.cleartripurl[i]=this.hoteldata[i].pageurl.split("?");
          this.hoteldata[i]["pages"]=this.cleartripurl[i];
        }
        console.log(this.hoteldata);
        
        if(this.hoteldata.length===0){
          this.errorStatus = true;
          console.log(this.errorStatus);
          
        }
        else{
          this.errorStatus = false;
        }
        
        console.log(this.hoteldata);
        this.overlayStatus=true;
        
      },
      error => {
        this.spinner.hide()
      }
    );
    }
    else{
      this.dateMistake=true;
    }
  }
}
