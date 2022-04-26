var Product_Name:string  = "Product";
var Unit_Price:number  = 1000;
var Quantiy:number  = 4;
enum Discount_Type {NEW15 = 15,WEEKEND25 = 25};
enum Delivery_Mode {StorePick = 0 , DeliveryToHome = 30};


function CalculateBill(Discount_Type,Delivery_Mode)
{
    let Total_amount  = Unit_Price * Quantiy;
    let Discount_Amount = Total_amount / Discount_Type;
    let Final_Amount = Total_amount -  Discount_Amount

    Final_Amount = Final_Amount + Delivery_Mode ;
    

    console.log("Here Is your Bill");
    var Output = `Product Name : ${Product_Name} Price : ${Unit_Price} Quantity : ${Quantiy} Total Amount : ${Total_amount} Discount Type :  ${Discount_Type} Deleivery Mode : ${Delivery_Mode} Discount Amount : ${Discount_Amount} Final Amount : ${Final_Amount}`
    console.log(Output);
}

CalculateBill(Discount_Type.NEW15,Delivery_Mode.DeliveryToHome);
