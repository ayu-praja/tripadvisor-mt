import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stop"
})
export class StopPipe implements PipeTransform {
  transform(datas: any[], term1: any, term2: any): any {
    console.log(term1);
    console.log(term2);

    if (
      (term1 === false || term1 === undefined) &&
      (term2 === false || term2 === undefined)
    )
      return datas;

    if (term1 === true && term2 === true) {
      return datas.filter(function(data) {
        if (data.onwardflights.length === 0 || data.onwardflights.length === 1)
          return data;
      });
    } else if (term1 === true) {
      return datas.filter(function(data) {
        if (data.onwardflights.length === 0) return data;
      });
    } else if (term2 === true) {
      return datas.filter(function(data) {
        if (data.onwardflights.length === 1) return data;
      });
    }
  }
}
