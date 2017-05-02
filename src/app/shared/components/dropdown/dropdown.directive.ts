import { Directive, Input, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnDestroy {

  @Input('appDropdown') appDropdownName: string;

  dropdownSubscription: Subscription;
  showDropdown: boolean = false;

  constructor(private dropdownService: DropdownService) {
    // Subscribe
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(showDropdown => {
      this.showDropdown = showDropdown;
    });
  }

  @HostListener('click') onClick() {
    this.dropdownService.dropdownToggle(this.showDropdown);
    console.log(this.appDropdownName);
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
