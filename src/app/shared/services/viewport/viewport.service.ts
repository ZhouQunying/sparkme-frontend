import { Injectable } from '@angular/core';

@Injectable()
export class ViewportService {

  constructor() { }

  /**
   * @return {number}
   */
  getWindowWidth(): number {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }
}
