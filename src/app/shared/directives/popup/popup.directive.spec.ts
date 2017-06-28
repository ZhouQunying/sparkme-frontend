import { ElementRef } from '@angular/core';

import { PopupService } from '../../services/popup/popup.service';
import { PopupDirective } from './popup.directive';

describe('PopupDirective', () => {
  let el: ElementRef;
  let popupService: PopupService;

  it('should create an instance', () => {
    const directive = new PopupDirective(el, popupService);
    expect(directive).toBeTruthy();
  });
});
