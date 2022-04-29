import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(input :number): string {

    let output : string = "";
    
    if(input == 1) output = "Below Avarage";
    if(input == 2) output = "Avarage";
    if(input == 3) output = "Good";
    if(input == 4) output = "Very Good";
    if(input == 5) output = "Excellent";

    return output;
  }

}
