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

  @HostBinding('class') classNames = 'bottom-center';

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
      this.setClassName(hidden);
    });
  }

  ngOnInit() {
    // Set parent element css position to relative
    (<HTMLElement>this.hostEl.parentNode).style.position = 'relative';
  }

  setClassName(hidden) {
    let classNames = 'bottom-center';

    if (!hidden) {
      let classVertical = 'bottom';
      let classHorizontal = 'center';
      const hostElCoords: any = this.viewportService.getCoords(this.hostEl);
      const bodyElCoords: any = this.viewportService.getCoords(document.body);

      const hostElBottomBound = hostElCoords.top + this.hostEl.clientHeight;
      const bodyBottomBound = bodyElCoords.top + this.viewportService.getBodyHeight();

      const hostElLeftBound = hostElCoords.left;
      const bodyLeftBound = bodyElCoords.left;
      const hostElRightBound = hostElLeftBound + this.hostEl.clientWidth;
      const bodyRightBound = bodyLeftBound + this.viewportService.getBodyWidth();

      if (hostElBottomBound > bodyBottomBound) {
        classVertical = 'top';
      }

      if (hostElLeftBound < bodyLeftBound && hostElRightBound > bodyRightBound) {
        classHorizontal = 'center';
      } else if (hostElLeftBound < bodyLeftBound) {
        classHorizontal = 'left';
      } else if (hostElRightBound > bodyRightBound) {
        classHorizontal = 'right';
      }

      classNames = `${classVertical}-${classHorizontal}`;
    }

    this.classNames = classNames;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
