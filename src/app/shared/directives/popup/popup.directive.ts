import { Directive, Input, OnInit, ElementRef, HostListener } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PopupComponent } from '../../components/popup/popup.component';
import { PopupService } from '../../services/popup/popup.service';

@Directive({
  selector: '[appPopup]',
})
export class PopupDirective implements OnInit {

  @Input('appPopup') popupComponent: PopupComponent;
  popupEl: HTMLElement;

  constructor(public el: ElementRef, private popupService: PopupService) { }

  ngOnInit() {
    this.popupEl = this.popupComponent.el.nativeElement;
    this.popupEl.hidden = true;
  }

  @HostListener('click') onClick() {
    this.popupEl.hidden = !this.popupEl.hidden;

    // Trigger stream of popup hidden state
    this.popupService.togglePopup(this.popupEl.hidden);
  }

  @HostListener('document:click', ['$event']) onBesidesClick() {
    if (!this.el.nativeElement.contains(event.target)) {
      this.popupEl.hidden = true;
    }
  }
}
