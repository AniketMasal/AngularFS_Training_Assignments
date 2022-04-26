var Employee_Id:number  = 5464654;
var Employee_Name:string  = "Scott";
var Employee_Job:string  = "Manager";
var Employee_IsPermanentEmployee:boolean = true;
var Employee_Salary:number  = 45000;
var Employee_Deptno:number = 10;


console.log("Employee Id  :" + Employee_Id);
console.log("Employee Name  :" + Employee_Name);
console.log("Employee Job  :" + Employee_Job);
console.log("Is Permanent Employee :" + Employee_IsPermanentEmployee);
console.log("Employee Salary  :  INR."  + Employee_Salary);
console.log("Employee Deptno :" + Employee_Deptno);

console.log("------------------------------------------------");

var strOutput = `Employee Details  Employee Id : ${Employee_Id}, Employee Name : ${Employee_Name}, Employee Job : ${Employee_Job}, Is Permanent Employee : ${Employee_IsPermanentEmployee}, Employee Salary : INR. ${Employee_Salary}, Employee Deptno : ${Employee_Deptno}`; 
console.log(strOutput);
