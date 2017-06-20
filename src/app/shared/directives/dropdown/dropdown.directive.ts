import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { DropdownService } from '../../services/dropdown/dropdown.service';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {

  @Input('appDropdown') dropdownComponent: DropdownComponent;
  dropdownEl: HTMLElement;

  constructor(public el: ElementRef, private dropdownService: DropdownService) { }

  ngOnInit() {
    this.dropdownEl = this.dropdownComponent.el.nativeElement;
    this.dropdownEl.hidden = true;
  }

  @HostListener('click') onClick() {
    this.dropdownEl.hidden = !this.dropdownEl.hidden;

    // Trigger stream of dropdown hidden state
    this.dropdownService.toggleDropdown(this.dropdownEl.hidden);
  }

  @HostListener('document:click', ['$event']) onBesidesClick() {
    if (!this.el.nativeElement.contains(event.target)) {
      this.dropdownEl.hidden = true;
    }
  }
}
