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

  @HostBinding('class') classNames;

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
    let classVertical = 'bottom';
    let classHorizontal = 'center';
    const bodyWidth = this.viewportService.getBodyWidth();
    const bodyHeight = this.viewportService.getBodyHeight();
    const hostElCoords: any = this.viewportService.getCoords(this.hostEl);
    const bodyElCoords: any = this.viewportService.getCoords(document.body);

    const hostElLeftBound = hostElCoords.left;
    const bodyLeftBound = bodyElCoords.left;
    const hostElRightBound = hostElLeftBound + this.hostEl.clientWidth;
    const bodyRightBound = bodyLeftBound + bodyWidth;

    const hostElTopBound = hostElCoords.top;
    const bodyTopBound = bodyElCoords.top;
    const hostElBottomBound = hostElTopBound + this.hostEl.clientHeight;
    const bodyBottomBound = bodyTopBound + bodyHeight;

     if (hostElTopBound < bodyTopBound && hostElBottomBound > bodyBottomBound) {
      classHorizontal = 'bottom';
    } else if (hostElTopBound < bodyTopBound) {
      classHorizontal = 'top';
    } else if (hostElBottomBound > bodyBottomBound) {
      classHorizontal = 'bottom';
    }

    if (hostElLeftBound < bodyLeftBound && hostElRightBound > bodyRightBound) {
      classHorizontal = 'center';
    } else if (hostElLeftBound < bodyLeftBound) {
      classHorizontal = 'left';
    } else if (hostElRightBound > bodyRightBound) {
      classHorizontal = 'right';
    }

    this.classNames = `${classVertical}-${classHorizontal}`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
