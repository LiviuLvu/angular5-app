import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.viewCtRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewCtRef.clear();
    }
  }
  constructor( private templateRef: TemplateRef<any>, private viewCtRef: ViewContainerRef) { }

}
