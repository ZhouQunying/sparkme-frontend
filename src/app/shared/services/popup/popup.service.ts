import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PopupService {

  // Observable boolean source
  private popupHiddenSource = new Subject<boolean>();

  // Observable boolean stream
  popupHidden$ = this.popupHiddenSource.asObservable();

  /**
   * Service toggle popup state command
   * @param {boolean} hidden
   */
  togglePopup(hidden: boolean) {
    this.popupHiddenSource.next(hidden);
  }
}
