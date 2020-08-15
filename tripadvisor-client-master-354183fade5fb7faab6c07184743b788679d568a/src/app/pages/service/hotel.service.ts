import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from 'src/assets/Api';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  api=new Api();
  private url =this.api.baseUrl+"/gethotelsbasedoncity?place="
  constructor(private http: HttpClient) { }

  getHotels(city:any): Observable<any[]> {
    return this.http.get<any>(
      this.url + city
    );

  }	
  getHotelCities():Observable<any>{
    return this.http.get('/assets/HotelCities.txt')
  }
}
