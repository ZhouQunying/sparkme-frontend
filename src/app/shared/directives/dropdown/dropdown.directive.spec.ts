import { ElementRef } from '@angular/core';

import { DropdownService } from '../../services/dropdown/dropdown.service';
import { DropdownDirective } from './dropdown.directive';

describe('DropdownDirective', () => {
  let el: ElementRef;
  let dropdownService: DropdownService;

  it('should create an instance', () => {
    const directive = new DropdownDirective(el, dropdownService);
    expect(directive).toBeTruthy();
  });
});
