import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-example',
  templateUrl: './binding-example.component.html',
  styleUrls: ['./binding-example.component.css']
})
export class BindingExampleComponent {

  public ProductName : String = "";
  public ProductPrice : number = 0;
  public ProductQty : number = 0;
  public Total : number = 0;
  public color : string = "";


  public  Get_Total():void {

    this.Total = this.ProductPrice * this.ProductQty;
    if (this.Total > 10000)
    {
      this.color = "Green";
    }
    else
    {
      this.color = "Blue";
    }
  }

}
