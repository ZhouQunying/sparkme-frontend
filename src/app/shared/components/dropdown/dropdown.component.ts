import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from './dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {

  dropdownSubscription: Subscription;
  showDropdown: boolean;

  constructor(private el: ElementRef, private dropdownService: DropdownService) {
    // Subscribe
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(showDropdown => {
      this.showDropdown = showDropdown;
    });

    // Set parent element css position to relative
    (<HTMLElement>this.el.nativeElement.parentNode).style.position = 'relative';
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
