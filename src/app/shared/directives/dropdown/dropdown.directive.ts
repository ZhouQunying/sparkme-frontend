import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownComponent } from '../../components/dropdown/dropdown.component';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {

  dropdownEl: HTMLElement;

  @Input('appDropdown') dropdownComponent: DropdownComponent;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    this.dropdownEl = this.dropdownComponent.el.nativeElement;
    this.dropdownEl.hidden = true;
  }

  @HostListener('click') onClick() {
    this.dropdownEl.hidden = !this.dropdownEl.hidden;
  }

  @HostListener('document:click', ['$event']) onBesidesClick() {
    if (!this.el.nativeElement.contains(event.target)) {
      this.dropdownEl.hidden = true;
    }
  }
}
