import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hotelsorting'
})
export class HotelsortingPipe implements PipeTransform {

  transform(datas:any[],field:string): any {
    
    if (field==="price") datas.sort((a,b)=>a.price-b.price);
  
    return datas;
  }

}
