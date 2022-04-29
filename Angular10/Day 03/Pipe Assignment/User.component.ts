import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {

  UserArray : User [] = [
    {User_Number : 0, User_Name : "user0" , User_Job : "Developer0" ,User_Salary : 2500,User_rating : 1},
    {User_Number : 1, User_Name : "user1" , User_Job : "Developer1" ,User_Salary : 3500,User_rating : 2},
    {User_Number : 2, User_Name : "user2" , User_Job : "Developer2" ,User_Salary : 4500,User_rating : 3},
    {User_Number : 3, User_Name : "user3" , User_Job : "Developer3" ,User_Salary : 2500,User_rating : 1},
    {User_Number : 4, User_Name : "user4" , User_Job : "Developer4" ,User_Salary : 5500,User_rating : 4},
    {User_Number : 5, User_Name : "user5" , User_Job : "Developer5" ,User_Salary : 2500,User_rating : 1},
    {User_Number : 6, User_Name : "user6" , User_Job : "Developer6" ,User_Salary : 7500,User_rating : 5},
    {User_Number : 7, User_Name : "user7" , User_Job : "Developer7" ,User_Salary : 6500,User_rating : 5},
    {User_Number : 8, User_Name : "user8" , User_Job : "Developer8" ,User_Salary : 2500,User_rating : 1},
    {User_Number : 9, User_Name : "user9" , User_Job : "Developer9" ,User_Salary : 8500,User_rating : 5},
    {User_Number : 10, User_Name : "user10" , User_Job : "Developer10" ,User_Salary : 9500,User_rating : 5},
  ];
  

  Startindex : number = 0 ;
  Endindex : number = 4 ;
  Ishidden :boolean = false;

  load_MoreUsers(){

    if(this.Endindex >= this.UserArray.length)
    {
      this.Ishidden = true;
    }
    this.Startindex = 0;
    this.Endindex = this.Endindex + 4;

  }
}
