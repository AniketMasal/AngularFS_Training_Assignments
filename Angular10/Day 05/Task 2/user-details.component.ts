import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  UsersArray:any ={};

  constructor( private Data :HttpClient ) {
   }

  ngOnInit(): void {
  }

  GetUserDetails()
  {
    //alert("hit")
    let url = "https://reqres.in/api/users/";

    this.Data.get(url).subscribe(data => {
      this.UsersArray = data;
      console.log(data);

    })
  }

}


