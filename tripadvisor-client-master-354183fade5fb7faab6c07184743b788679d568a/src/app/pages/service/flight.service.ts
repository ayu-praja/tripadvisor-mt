import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class FlightService {
  private url =
    "http://developer.goibibo.com/api/search/?app_id=a9ee56df&app_key=6c005d96918ae1f33946e316ceb58a27&format=json&source=";
  constructor(private http: HttpClient) {}
  

  getFlight(src: any, dest: any, date: any): Observable<any[]> {
    console.log(
      this.url +
        src +
        "&destination=" +
        dest +
        "&dateofdeparture=" +
        date +
        "&seatingclass=E&adults=1&children=0&infants=0&counter=100"
    );

    return this.http.get<any>(
      this.url +
        src +
        "&destination=" +
        dest +
        "&dateofdeparture=" +
        date +
        "&seatingclass=E&adults=1&children=0&infants=0&counter=100"
    );
  }
  getAirportCodes():Observable<any>{
    return this.http.get('/assets/Airports_APi.txt')
  }
}
