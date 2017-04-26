import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DropdownService {

  private dropdownToggledSource = new Subject<boolean>();

  dropdownToggled$ = this.dropdownToggledSource.asObservable();

  constructor() { }

  dropdownToggle(toggle: boolean) {
    this.dropdownToggledSource.next(!toggle);
  }
}
