import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product1';


@Component({
  selector: 'app-directives-products',
  templateUrl: './directives-products.component.html',
  styleUrls: ['./directives-products.component.css']
})
export class DirectivesProductsComponent implements OnInit {

  constructor() { }

  displayMode :string ="List";

  ProductsArray : Product[] =[
    {Pid : 10, Pname :"Product1" , PPrice : 100, PCategory : "Category 1" , PQty : 20, PPicture : ""},
    {Pid : 11, Pname :"Product2" , PPrice : 125, PCategory : "Category 2" , PQty : 40, PPicture : ""},
    {Pid : 12, Pname :"Product3" , PPrice : 150, PCategory : "Category 1" , PQty : 60, PPicture : ""},
    {Pid : 13, Pname :"Product4" , PPrice : 200, PCategory : "Category 2" , PQty : 80, PPicture : ""},

  ]
//method for getting value with mouse hover 
Img_Click(param:string){
    //alert("hover");
    //console.log(param)  
    this.displayMode = param;
  }


  ngOnInit(): void {
  }

}
