import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    // baseUrl:string  = "https://localhost:44307/api/StudentApi/";
    baseUrl:string  = "http://localhost:3000/Employees/";

    
    constructor(private httpObj:HttpClient) { }
  
    // Read All
    public getAllStudents(): Observable<any>
    {   
      return this.httpObj.get(this.baseUrl);
    }
  
    // Read Single
    public getStudentById(empno:number):any
    {
      return this.httpObj.get(this.baseUrl + empno);
    }
  
    // Create
    public addStudent(stObj:any):any
    {
      return this.httpObj.post(this.baseUrl, stObj);
    }
  
    // Update
    public updateStudent(stObj:any):any
    {
      return this.httpObj.put(this.baseUrl + stObj.studentId, stObj);
      // return this.httpObj.put(this.baseUrl, stObj);
    }
  
  
    // Delete
    public deleteStudent(sid:number):any
    {
      return this.httpObj.delete(this.baseUrl + sid);
    }

  
}
