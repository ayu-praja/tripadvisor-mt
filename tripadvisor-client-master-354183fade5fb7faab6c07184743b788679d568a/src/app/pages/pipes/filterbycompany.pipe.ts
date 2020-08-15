import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterbycompany"
})
export class FilterbycompanyPipe implements PipeTransform {
  transform(
    datas: any[],
    check1: any,
    check2: any,
    check3: any,
    check4: any,
    check5: any
  ): any {
    if (
      (check1 === false || check1 === undefined) &&
      (check2 === false || check2 === undefined) &&
      (check3 === false || check3 === undefined) &&
      (check4 === false || check4 === undefined) &&
      (check5 === false || check5 === undefined)
    )
      return datas;

    if (
      check1 === true ||
      check2 === true ||
      check3 === true ||
      check4 === true ||
      check5 === true
    ) {
      return datas.filter(function(data) {
        if (check1 === true) {
          if (!data.airline.localeCompare("Vistara")) {
            return data;
          }
        }

        if (check2 === true) {
          if (!data.airline.localeCompare("Spicejet")) {
            return data;
          }
        }

        if (check3 === true) {
          if (!data.airline.localeCompare("Air India")) {
            return data;
          }
        }

        if (check4 === true) {
          if (!data.airline.localeCompare("GoAir")) {
            return data;
          }
        }

        if (check5 === true) {
          if (!data.airline.localeCompare("IndiGo")) {
            return data;
          }
        }
      });
    }
  }
}
