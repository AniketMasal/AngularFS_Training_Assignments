import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolordirectiveDirective {

  @Input()
  appBgcolor:string  = "";

  constructor(private _element: ElementRef) {

   }

   ngOnInit()
   {
     if(this.appBgcolor == "")
     {
        this.appBgcolor = "Yellow";
     }

     this._element.nativeElement.style.color = this.appBgcolor;
       }



}
