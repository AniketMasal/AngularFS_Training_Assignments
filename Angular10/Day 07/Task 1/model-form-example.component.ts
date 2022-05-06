import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form-example',
  templateUrl: './model-form-example.component.html',
  styleUrls: ['./model-form-example.component.css']
})
export class ModelFormExampleComponent implements OnInit {

  RegexPattern = "^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$"

  ownerForm:FormGroup = new FormGroup({
    ownerName : new FormControl("", Validators.required),
    ownerContact : new FormControl("", [Validators.pattern("\\d{10}"),Validators.required]),
    ownerEmail : new FormControl("", [Validators.required,Validators.email]),
    vehicalRegNo : new FormControl("", [Validators.required,Validators.pattern(this.RegexPattern)]),
    ownerAddress : new FormControl("",Validators.required),
    vehicalModel : new FormControl("",[Validators.pattern("[a-z]{10}"),Validators.required]),
    vehicalColor : new FormControl("",Validators.required),
    vehicalYear : new FormControl("",[Validators.required,Validators.min(2012),Validators.max(2022)])    
  });


 public submit_click():void
 {
     alert("Registeration Details are submitted.");
     let Ownerobj = this.ownerForm.value;
     console.log(Ownerobj);
 }
  constructor() { }

  ngOnInit(): void {
  }

}