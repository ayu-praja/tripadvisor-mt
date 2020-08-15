import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(datas:any[],field:string): any {
    
    if (field==="price") datas.sort((a,b)=>a.fare.grossamount-b.fare.grossamount);
  
    return datas;
  }
}
