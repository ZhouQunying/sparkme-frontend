import { Directive, Input, Renderer2, HostListener, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from './dropdown.service';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnDestroy {

  @Input() appDropdown: string;

  dropdownSubscription: Subscription;
  toggle: boolean = false;

  constructor(private renderer: Renderer2, private dropdownService: DropdownService) {
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(toggle => {
      this.toggle = toggle;
    });
  }

  @HostListener('click') onClick() {
    this.dropdownService.dropdownToggle(this.toggle);
    console.log('click!');
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
