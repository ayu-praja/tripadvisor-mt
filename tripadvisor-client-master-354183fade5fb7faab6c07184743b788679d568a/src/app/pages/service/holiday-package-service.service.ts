import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Api } from "src/assets/Api";
import { AddPackage } from '../holiday-package/AddPackage';

@Injectable({
  providedIn: "root"
})
export class HolidayPackageServiceService {
  api = new Api();
  private url = this.api.baseUrl + "/place/getpackage/";
  private weaterUrl="http://api.openweathermap.org/data/2.5/weather?q=";
  private key="&units=metric&appid=5e2c131b134a9ecd5fcdfa38cc08b81d"
  constructor(private http: HttpClient) {}

  getPackage(dest: any): Observable<any> {
    return this.http.get(this.url + dest);
  }
  getHolidayCities():Observable<any>{
    return this.http.get('/assets/HolidayCities.txt')
  }

  getWeather(cityName:any):Observable<any>{
    return this.http.get(this.weaterUrl+cityName+this.key);
  }
  addPackage(addPackage:AddPackage,placeName:string):Observable<any>{
    return this.http.post(this.api.baseUrl+"/holidayPackage/addPackage/"+placeName,addPackage);
  }
  booking(packageId:number,userName:string,date:string):Observable<any>{
    return this.http.post(this.api.baseUrl+"/booking/bookNow/"+packageId+"/"+userName+"/"+date,date,{responseType: 'text'});
  }
}
