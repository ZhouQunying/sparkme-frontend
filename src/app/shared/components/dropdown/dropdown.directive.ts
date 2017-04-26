import { Directive, Input, Renderer2, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit, OnDestroy {

  @Input('appDropdown') appDropdownName: string;

  dropdownSubscription: Subscription;
  showDropdown: boolean = false;

  constructor(private renderer: Renderer2, private dropdownService: DropdownService) {
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(showDropdown => {
      this.showDropdown = showDropdown;
    });
  }

  ngOnInit() {
    console.log(this.appDropdownName)
  }

  @HostListener('click') onClick() {
    this.dropdownService.dropdownToggle(this.showDropdown);
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
