import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostBinding allows us to bind to properties of the element
  @HostBinding('class.open') isOpen = false;
  // @HostListener: listen for specified event
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}