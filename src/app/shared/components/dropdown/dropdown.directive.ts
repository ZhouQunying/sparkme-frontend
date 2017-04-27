import { Directive, Input, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[appDropdown]',
  host: {
    '[style.position]': '"relative"'
  }
})
export class DropdownDirective implements OnDestroy {

  @Input('appDropdown') appDropdownName: string;

  dropdownSubscription: Subscription;
  showDropdown: boolean = false;

  constructor(private renderer: Renderer2, private dropdownService: DropdownService) {
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
