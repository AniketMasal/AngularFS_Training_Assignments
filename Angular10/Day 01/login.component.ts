import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public EmpId:number  = 54654564;
  public EmpName:string  = "Stephen";
  public EmpJob:string  = "Manager";
  public EmpSalary:number = 75000;
  public EmpDeptNo:number = 10;
}


