import { ElementRef } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';

describe('DropdownDirective', () => {
  let el: ElementRef;

  it('should create an instance', () => {
    const directive = new DropdownDirective(el);
    expect(directive).toBeTruthy();
  });
});
