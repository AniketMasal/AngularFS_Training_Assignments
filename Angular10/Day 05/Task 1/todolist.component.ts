import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  inputItem: string = '';
  id:number=0;

  TasksList: any[] = [
    { id: 1, task: "learn", isDone: true },
    { id: 2, task: "Write", isDone: false },
    { id: 3, task: "List", isDone: false },
    { id: 4, task: "Test", isDone: false },
    { id: 5, task: "Debug", isDone: false }
  ];


  addNew_click() {
    let todoObj: any = new Object();
    todoObj.task = this.inputItem;
    this.TasksList.push(todoObj);
  }


  delete_click(id: number): void {
    let index = this.TasksList.findIndex(item => item.id == id);
    this.TasksList.splice(index, 1);
  }

  select_click(id: number) {
    let obj: any = this.TasksList.filter(item => item.id == id);
    this.inputItem = obj[0].task;
    this.id = id;
  }


  update_click(id:number) {
    let obj: any = this.TasksList.filter(item => item.id == this.id);
    obj[0].task = this.inputItem; 
    obj[0].id = this.id; 
   }


  DeleteDone_click() {
    this.TasksList = this.TasksList.filter(todo => todo.isDone == false);

  }

  DeleteAll_click() {
    this.TasksList = [{}];
  }



}

