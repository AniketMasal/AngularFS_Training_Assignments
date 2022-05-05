import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private dataservice :DataService) { }


  eno:number  = 0;
  ename:string  = "";
  ejob:string  = "";
  esal:number = 0;
  edeptno:number = 0;
  emparray:any[] = [];
 
  getData_click()
  {
			this.dataservice.getAllStudents().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.emparray = resData;
			});
  }

  addData_click() {
    let empobj:any = {};
    empobj.empno = 0;
    empobj.empname = this.ename;
    empobj.empjob = this.ejob;
    empobj.empsal = this.esal;
    empobj.empdeptno = this.edeptno;

    console.log(empobj);

    this.dataservice.addStudent(empobj).subscribe( (resData:any) =>
    {
      alert("New Student details are added to database");
      this.getData_click();
    });
  }

  updateData_click() {
    let empobj:any = {};
    empobj.empno = this.eno;
    empobj.empname = this.ename;
    empobj.empjob = this.ejob;
    empobj.empsal = this.esal;
    empobj.empdeptno = this.edeptno;

    console.log(empobj);

    this.dataservice.updateStudent(empobj).subscribe( (resData:any) =>
    {
       alert("Student details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(eno:number) {

    this.dataservice.deleteStudent(eno).subscribe( (resData:any) =>
    {
      alert("Student details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(eno:number) {

    this.eno = eno;
    
    this.dataservice.getStudentById(eno).subscribe( (resData:any) =>
    {
      this.ename = resData.empname;
      this.ejob = resData.empjob;
      this.esal = resData.empsal;
      this.edeptno = resData.empdeptno;
    });
  }
  clearFields() {
    this.ename = "";
    this.ejob = "";
    this.esal = 0;
    this.edeptno = 0;
  }
  
  ngOnInit(): void {
  }

}
