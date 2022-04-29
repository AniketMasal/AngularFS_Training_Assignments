import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(input :any[], minSalary:number , maxSalary:number): any[] {
    
    if(minSalary !==0 && maxSalary !==0)
    {
       return input.filter(item => item.Emp_Salary <= maxSalary && item.Emp_Salary >= minSalary);
      
     }
      
    else {
        return input;
      }
                                    
  }

}
