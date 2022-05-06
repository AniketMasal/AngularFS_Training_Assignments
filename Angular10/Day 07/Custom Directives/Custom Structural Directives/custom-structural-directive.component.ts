import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive',
  templateUrl: './custom-structural-directive.component.html',
  styleUrls: ['./custom-structural-directive.component.css']
})
export class CustomStructuralDirectiveComponent implements OnInit {


  user:string[]=["smith", "stive" ,"sam", "Robert", "Mark"];

  
  constructor() { }

  ngOnInit(): void {
  }

}
