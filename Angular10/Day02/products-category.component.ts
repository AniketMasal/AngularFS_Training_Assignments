import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../Models/Products';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  
  @Input()
  Productcategory : string = "";

  Filterproducts :Products[] = [];
  
  ProductsArray : Products[] =[
    {Pid : 10, Pname :"Product1" , PPrice : 100, PCategory : "Category 1" , PQty : 20},
    {Pid : 11, Pname :"Product2" , PPrice : 125, PCategory : "Category 2" , PQty : 40},
    {Pid : 12, Pname :"Product3" , PPrice : 150, PCategory : "Category 1" , PQty : 60},
    {Pid : 13, Pname :"Product4" , PPrice : 200, PCategory : "Category 2" , PQty : 80},
    {Pid : 14, Pname :"Product5" , PPrice : 350, PCategory : "Category 1" , PQty : 60},
    {Pid : 15, Pname :"Product6" , PPrice : 500, PCategory : "Category 2" , PQty : 80},

  ]

  
  ngOnInit(): void {

    this.Filterproducts = this.ProductsArray.filter(Product=>Product.PCategory == this.Productcategory);
    
  }
}
