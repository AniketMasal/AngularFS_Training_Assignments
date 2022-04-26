class Customer
{
    public cid:number = 0;
    public cname:string  = "";
    public city:string  = "";

    constructor(cid:number = 0, cname:string = "", city:string = "")
    {
        this.cid = cid;
        this.cname = cname;
        this.city = city;
    }
  

    public showDetails():void
    {
        // console.log("Customer Id : " + this.cid);
        // console.log("Customer Name : " + this.cname);
        // console.log("Customer city : " + this.city);
        // console.log("----------------------------");

        var onelineoutput  = `Customer ID : ${this.cid} Customer Name  : ${this.cname} Customer City : ${this.city}`

        console.log(onelineoutput);
    }
}


//let s1:Customer = new Customer(10256);
//let s2:Customer = new Customer(10256, "Scott");
let s3:Customer = new Customer(10256, "Scott", "HYD");
//let s4:Customer = new Customer();

//s1.showDetails();
//s2.showDetails();
s3.showDetails();
//s4.showDetails();
