import { Component, OnInit } from '@angular/core';
import { Friends } from '../Models/Friends';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  FriendsArray: Friends[] = [
    {Name : "Scott"},
    {Name : "Smith"},
    {Name : "Sandy"},
    {Name : "Sam"},
    
];
  

  constructor() { }

  ngOnInit(): void {
  }

}
