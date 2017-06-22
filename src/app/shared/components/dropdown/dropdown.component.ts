import { Component, ElementRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from '../../services/dropdown/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {

  @HostBinding('class') classNames;

  subscription: Subscription;

  constructor(public el: ElementRef, private dropdownService: DropdownService) {
    // Subscribe stream of dropdown hidden state
    this.subscription = dropdownService.dropdownHidden$.subscribe(hidden => {
      const hostEl = el.nativeElement;

      // Set css position of container element
      if (!hidden) {
        // hostEl.style.left = `calc(50% - ${hostEl.clientWidth / 2}px)`;

        console.log(hostEl.clientWidth)
        console.log(hostEl.offsetLeft)
        console.log(hostEl.parentNode.offsetLeft)
        // this.classNames = 'class1 class2 class3';
      }
    });
  }

  ngOnInit() {
    // Set parent element css position to relative
    (<HTMLElement>this.el.nativeElement.parentNode).style.position = 'relative';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
