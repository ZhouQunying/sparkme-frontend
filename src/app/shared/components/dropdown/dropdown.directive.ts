import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostListener('click') onClick() {
    console.log('click!');
  }
}
