import { Component, OnInit } from '@angular/core';
import { Dept } from '../Models/dept';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {


  deptno:number = 0;
  dname:string = "";
  loc:string = "";

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  addDept_click()
  {
      let deptObj:Dept = new Dept();
      deptObj.deptno = this.deptno;
      deptObj.dname = this.dname;
      deptObj.loc = this.loc;

      this.deptsArray.push(deptObj);

      //clearing textboxed after add operation
      this.deptno = 0;
      this.dname = "";
      this.loc = "";
  }


  delete_click(dno:number)
  {
    //confirm before deleting
    if(confirm("Are you sure to delete" +dno))
    {
      let index = this.deptsArray.findIndex(item => item.deptno == dno);
      this.deptsArray.splice(index, 1);
      this.deptno = 0;
      this.dname = "";
      this.loc = "";
    }
    
  }

  select_click(dno:number)
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }

  update_click()
  {
    let deptObj:any = this.deptsArray.find(item => item.deptno == this.deptno);
     deptObj.dname = this.dname;
     deptObj.loc = this.loc;
     this.deptno = 0;
      this.dname = "";
      this.loc = "";
   
}
}
