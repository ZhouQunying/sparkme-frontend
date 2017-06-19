import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from '../../services/dropdown/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(public el: ElementRef, private dropdownService: DropdownService) {

    // Subscribe stream of dropdown hidden state
    this.subscription = dropdownService.dropdownHidden$.subscribe(hidden => {

      // Set css position of container element
      if (!hidden) {
        this.el.nativeElement.style.left = `calc(50% - ${el.nativeElement.clientWidth / 2}px)`;
      }
    });
  }

  ngOnInit() {
    const parentNode: HTMLElement = this.el.nativeElement.parentNode;

    // Set parent element css position to relative
    parentNode.style.position = 'relative';

    // // Set css position of container element
    // (<HTMLElement>this.el.nativeElement.querySelector('.app-dropdown')).style.left = `calc(-50% + ${parentNode.clientWidth / 2}px)`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
