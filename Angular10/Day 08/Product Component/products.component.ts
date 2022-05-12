import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Models/Product1';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  ProductsArray : Product[] =[
    {Pid : 10, Pname :"Product1" , PPrice : 100, PCategory : "Electronics" , PQty : 20, PPicture :"../../assets/Images/Electronics1.jfif" },
    {Pid : 11, Pname :"Product2" , PPrice : 125, PCategory : "Electronics" , PQty : 40 , PPicture :"../../assets/Images/Electronics2.jpeg"},
    {Pid : 12, Pname :"Product3" , PPrice : 150, PCategory : "Fashion" , PQty : 60 , PPicture :"../../assets/Images/Fashion1.jfif"},
    {Pid : 13, Pname :"Product4" , PPrice : 200, PCategory : "Pharmacy" , PQty : 80 , PPicture :"../../assets/Images/Pharma1.jfif"},

  ]

  filterproducts : any = [];
  constructor(private   route: ActivatedRoute) { }

  ngOnInit(): void {
    let selectedcategory =this.route.snapshot.params["category"];
    console.log(selectedcategory);
    this.filterproducts = this.ProductsArray.filter(item => item.PCategory == selectedcategory);

    console.log(this.filterproducts)
  }
}
