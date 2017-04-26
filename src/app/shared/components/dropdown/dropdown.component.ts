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
  toggle: boolean;

  constructor(private dropdownService: DropdownService) {
    this.dropdownSubscription = dropdownService.dropdownToggled$.subscribe(toggle => {
      this.toggle = toggle;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.dropdownSubscription.unsubscribe();
  }
}
