import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'yellow';
  @HostBinding('style.color') color: string;
  
  constructor(private elRef: ElementRef ,private renderer: Renderer2){};

  ngOnInit() {
    this.color = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.renderer.setAttribute(this.elRef.nativeElement, 'id', 'my_custom_id', 'html');
  }

  @HostListener('mouseenter') evtmouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
    this.color = this.highlightColor;
  }
  @HostListener('mouseleave') evtmouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'lightgray');
    this.color = this.defaultColor;
  }
  
}