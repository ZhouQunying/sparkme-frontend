import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private dropdownService: DropdownService) {
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(showDropdown => {
      this.showDropdown = showDropdown;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
