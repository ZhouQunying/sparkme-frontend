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
      this.setClassName(hidden);
    });
  }

  ngOnInit() {
    // Set parent element css position to relative
    (<HTMLElement>this.hostEl.parentNode).style.position = 'relative';
  }

  setClassName(hidden) {
    console.log(this.el)

    if (!hidden) {
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

      if (hostElLeftBound < bodyLeftBound && hostElRightBound > bodyRightBound) {
        classHorizontal = 'center';
        console.log(classHorizontal);
      } else if (hostElLeftBound < bodyLeftBound) {
        classHorizontal = 'left';
        console.log(classHorizontal);
      } else if (hostElRightBound > bodyRightBound) {
        classHorizontal = 'right';
        console.log(classHorizontal);
      }

      const hostElTopBound = hostElCoords.top;
      const bodyTopBound = bodyElCoords.top;
      const hostElBottomBound = hostElTopBound + this.hostEl.clientHeight;
      const bodyBottomBound = bodyTopBound + bodyHeight;

       if (hostElTopBound < bodyTopBound && hostElBottomBound > bodyBottomBound) {
        classVertical = 'bottom';
      } else if (hostElTopBound < bodyTopBound) {
        classVertical = 'top';
      } else if (hostElBottomBound > bodyBottomBound) {
        classVertical = 'bottom';
      }

      this.classNames = `${classVertical}-${classHorizontal}`;
    } else {
      this.classNames = '';
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
