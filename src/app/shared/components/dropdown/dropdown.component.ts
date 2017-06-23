import { Component, ElementRef, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DropdownService } from '../../services/dropdown/dropdown.service';
import { ViewportService } from '../../services/viewport/viewport.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, OnDestroy {

  @HostBinding('class') className;

  hostEl: HTMLElement;
  subscription: Subscription;

  constructor(
    public el: ElementRef,
    private dropdownService: DropdownService,
    private viewportService: ViewportService) {

    this.hostEl = el.nativeElement;

    // Subscribe stream of dropdown hidden state
    this.subscription = dropdownService.dropdownHidden$.subscribe(hidden => {

      // Set class name of host element
      if (!hidden) {
        this.setClassName();
      }
    });
  }

  ngOnInit() {
    // Set parent element css position to relative
    (<HTMLElement>this.hostEl.parentNode).style.position = 'relative';
  }

  setClassName() {
    const hostElCoords = this.viewportService.getCoords(this.hostEl);
    const bodyElCoords = this.viewportService.getCoords(document.body);

    console.log(hostElCoords);
    console.log(bodyElCoords);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
