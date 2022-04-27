import { Component, OnInit } from '@angular/core';
import { Products } from '../Models/Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductsArray : Products[] =[
    {Pid : 10, Pname :"Product1" , PPrice : 100, PCategory : "Category 1" , PQty : 20},
    {Pid : 11, Pname :"Product2" , PPrice : 125, PCategory : "Category 2" , PQty : 40},
    {Pid : 12, Pname :"Product3" , PPrice : 150, PCategory : "Category 1" , PQty : 60},
    {Pid : 13, Pname :"Product4" , PPrice : 200, PCategory : "Category 2" , PQty : 80},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
