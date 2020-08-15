import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hotelfacility"
})
export class HotelfacilityPipe implements PipeTransform {
  transform(
    datas: any[],
    aircondition: any,
    television: any,
    ceilingfan: any,
    freewifi:any
  ): any {
    console.log("reached");

    if (
      (aircondition === false || aircondition === undefined) &&
      (television === false || television === undefined) &&
      (ceilingfan === false || ceilingfan === undefined) &&
      (freewifi === false || freewifi === undefined)
    )
      return datas;

    return datas.filter(function(data) {
      if (aircondition === true) {
        if (
          data.facilities.indexOf("Air Conditioning") > -1 ||
          data.facilities.indexOf(" Air Conditioning") > -1 ||
          data.facilities.indexOf("Air Conditioning ") > -1 ||
          data.facilities.indexOf(" Air Conditioning ") > -1
        ) {
          console.log(data);

          // console.log("air");

          return data;
        }
      }

      if (television === true) {
        if (
          data.facilities.indexOf("Television") > -1 ||
          data.facilities.indexOf(" Television") > -1 ||
          data.facilities.indexOf("Television ") > -1 ||
          data.facilities.indexOf(" Television ") > -1
        ) {
          {
            // console.log("tele");

            return data;
          }
        }
      }
      if (ceilingfan === true) {
        if (
          data.facilities.indexOf("Ceiling Fan") > -1 ||
          data.facilities.indexOf(" Ceiling Fan") > -1 ||
          data.facilities.indexOf("Ceiling Fan ") > -1 ||
          data.facilities.indexOf(" Ceiling Fan ") > -1
        ) {
          {
            // console.log("tele");

            return data;
          }
        }
      }
      
      if (freewifi === true) {
        if (
          data.facilities.indexOf("Free Wi-Fi") > -1 ||
          data.facilities.indexOf(" Free Wi-Fi") > -1 ||
          data.facilities.indexOf("Free Wi-Fi ") > -1 ||
          data.facilities.indexOf(" Free Wi-Fi ") > -1
        ) {
          {
            // console.log("tele");

            return data;
          }
        }
      }
    });
  }
}
