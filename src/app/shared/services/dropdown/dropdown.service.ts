import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DropdownService {

  // Observable boolean source
  private dropdownHiddenSource = new Subject<boolean>();

  // Observable boolean stream
  dropdownHidden$ = this.dropdownHiddenSource.asObservable();

  /**
   * Service toggle dropdown state command
   * @param {boolean} hidden
   */
  toggleDropdown(hidden: boolean) {
    this.dropdownHiddenSource.next(hidden);
  }
}
