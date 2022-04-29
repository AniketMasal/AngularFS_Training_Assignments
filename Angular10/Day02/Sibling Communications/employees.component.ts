import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit,OnChanges {
  @Input()
  sortby : string ="";

  EMPList : Employee[] =[
    {Emp_Number : 101, Emp_Name :"Aniket" , Emp_Job : "Developer" , Emp_Salary :3200, Emp_Deptno : 10},
    {Emp_Number : 102, Emp_Name :"Emp 2" , Emp_Job : "Developer" , Emp_Salary :4200, Emp_Deptno : 10},
    {Emp_Number : 103, Emp_Name :"Emp 3" , Emp_Job : "Developer" , Emp_Salary :5200, Emp_Deptno : 20},
    {Emp_Number : 104, Emp_Name :"Emp 4" , Emp_Job : "Developer" , Emp_Salary :6200, Emp_Deptno : 10},
    {Emp_Number : 105, Emp_Name :"Emp 5" , Emp_Job : "Developer" , Emp_Salary :7200, Emp_Deptno : 30} 
  ]

  EmpSorted : Employee[] = [];

  constructor() { }


  ngOnInit(): void {
  }

  
  ngOnChanges(): void {
  
    if(this.sortby == "EmpNo")
    {
      this.EmpSorted = this.EmpSorted.sort(function(a,b){return a.Emp_Number  < b.Emp_Number ? 1 :-1});
    }
    
  }

}
