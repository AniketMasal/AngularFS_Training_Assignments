import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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


    //Filetring Results with rxjs operators

    public GetEmployeeByJob(empjob:string):Observable<any[]>{
      return this.httpObj.get<any[]>(this.baseUrl).pipe(
        map(res =>{
          return res.filter(item=> item.empjob == empjob)             
        })
      );
    }

    public GetManagerByDepartment(empdeptno:number) : Observable<any[]>{
      return this.httpObj.get<any[]>(this.baseUrl).pipe(
        map(res =>{
          return res.filter(item => item.empdeptno == empdeptno && item.empjob == "Manager")
        })
        )

      }


      public GetAllEmpwithJob():Observable<any[]>
      {
        return this.httpObj.get<any[]>(this.baseUrl).pipe(
          map(res => {
            return res.map(item => {
              return { 	name: item.empname, email : item.empjob} });
        })
        );
      }
    
      
    public GetEmpWithoutSpecificDept(empdeptno:number) : Observable<any[]>{
      return this.httpObj.get<any[]>(this.baseUrl).pipe(
        map(res =>{
          return res.filter(item => item.empdeptno != empdeptno)
        })
        )

      }

      public SortEmpBasedOnSal() : Observable<any[]>{
        return this.httpObj.get<any[]>(this.baseUrl).pipe(
          map(res =>{
            return res.sort((a, b) => (a.empsal > b.empsal) ? 1 : -1);
          })
          )
  
        }



}
