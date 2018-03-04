import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef ,private renderer: Renderer2){};

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.renderer.setAttribute(this.elRef.nativeElement, 'id', 'my_custom_id', 'html');
  }

  @HostBinding('style.color') color: string = 'pink';

  @HostListener('mouseenter') evtmouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.color = 'limegreen';
  }
  @HostListener('mouseleave') evtmouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightgray');
    this.color = 'orange';    
  }
  
}