class Product
{
    private ProductID:number = 0;
    private ProductName:string  = "";
    private unitprice:number = 0;
    private Qty:number = 0;


    constructor(ProductId:number)
    {
        this.ProductID = ProductId;
    }

    public get ProductId():number
    {
        return this.ProductId;
    }
 
    public get Product_Name():string
    {
        return this.ProductName;
    }

    public set Product_Name(value:string)
    {
        this.ProductName = value;
    }

    public get Product_Unit_Price():number
    {
        return this.unitprice;
    }

    public set Product_Unit_Price(value : number)
    {
        this.unitprice = value;
    } 

    public get Product_qty():number
    {
        return this.Qty;
    }
    public set Product_qty(value :number)
    {   
        this.Qty = value;
    }
}


let productObj:Product = new Product(101);


productObj.Product_Name = "Product test";  
productObj.Product_Unit_Price = 1000;
productObj.Product_qty = 10;


console.log("Product Id: " + productObj.ProductId);  
console.log("Product Name: " + productObj.Product_Name);  
console.log("Product Unitprice: " + productObj.Product_Unit_Price);  
console.log("Product qty: " + productObj.Product_qty);  
