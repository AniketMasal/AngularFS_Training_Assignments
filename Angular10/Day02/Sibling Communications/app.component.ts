import { Component, Input, Output } from '@angular/core';
import { Products } from './Models/Products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
sortingby :string = "";

sort(sort_by:string) :void{

  this.sortingby = sort_by;
}
}

