import { Directive, Input, OnInit, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownComponent } from './dropdown.component';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {

  dropdownEl: HTMLElement;

  @Input('appDropdown') dropdownComponent: DropdownComponent;

  constructor() { }

  ngOnInit() {
    this.dropdownEl = this.dropdownComponent.el.nativeElement;
    this.dropdownEl.hidden = true;
  }

  @HostListener('click') onClick() {
    this.dropdownEl.hidden = !this.dropdownEl.hidden;
  }
}
