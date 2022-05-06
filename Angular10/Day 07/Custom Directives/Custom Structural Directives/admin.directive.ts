import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective {

  @Input()
  appAdmin: string = '';

  constructor(private viewContainer: ViewContainerRef,private templateRef: TemplateRef<any>) { }


  ngOnChanges() {

    if (this.appAdmin == 'sam') {
     
      this.viewContainer.clear();
      
    }
    else {
      
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
