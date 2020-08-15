import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(datas: any[], star1: any, star2: any,star3:any,star4:any,star5:any): any {
    if (
      (star1 === false || star1 === undefined) &&
      (star2 === false || star2 === undefined) &&
      (star3 === false || star3 === undefined) &&
      (star4 === false || star4 === undefined) &&
      (star5 === false || star5 === undefined)
    )
      return datas;
  
console.log(star1);

  return datas.filter(function(data) {
    if (star1 === true) {
      
      
      if (data.hotelstar[0]==1) {
        
        
        return data;
      }
    }

    if (star2 === true) {
      if (data.hotelstar[0]==2) {
        return data;
      }
    }

    if (star3 === true) {
      if (data.hotelstar[0]==3) {
        return data;
      }
    }

    if (star4 === true) {
      if (data.hotelstar[0]==4) {
        return data;
      }
    }

    if (star5 === true) {
      if (data.hotelstar[0]==5) {
        return data;
      }
    }

  });
}
}
