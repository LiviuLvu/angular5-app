import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef ,private renderer: Renderer2){};

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.renderer.setAttribute(this.elRef.nativeElement, 'id', 'my_custom_id', 'html');
  }

  @HostListener('mouseenter') evtmouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');    
  }
  @HostListener('mouseleave') evtmouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightgray');    
  }
  
}