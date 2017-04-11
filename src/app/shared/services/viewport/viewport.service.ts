import { Injectable } from '@angular/core';

@Injectable()
export class ViewportService {

  constructor() { }

  public getWindowWidth() {
    return window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
  }
}
