import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.css']
})
export class FilterlistComponent implements OnInit {

  @Output()
  onhyperlinkclick:EventEmitter<string> = new EventEmitter();

  sortingbyth:string ="";

  sortingmethod()
  {

   alert("Hyperlink value" +this.sortingbyth)
    this.onhyperlinkclick.emit(this.sortingbyth); 
  }
  constructor() { }

  ngOnInit(): void {
  }

}
