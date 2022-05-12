import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  Categories : any[] =[
    {Categrory :"Electronics", Picture:"../../assets/Images/Electronics1.jfif" },
    {Categrory :"Fashion", Picture:"../../assets/Images/Fashion1.jfif" },
    {Categrory :"Pharmacy", Picture:"../../assets/Images/Pharma1.jfif" },
   // {Categrory :"Books", Picture:"../../assets/Images/welcome.jpg" },
    

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
