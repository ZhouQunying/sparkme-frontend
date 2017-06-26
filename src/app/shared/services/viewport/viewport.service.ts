import { Injectable } from '@angular/core';

@Injectable()
export class ViewportService {

  bodyEl: HTMLElement = document.body;
  docEl: HTMLElement = document.documentElement;

  constructor() { }

  /**
   * @return {number}
   */
  getBodyWidth(): number {
    return window.innerWidth
      || this.docEl.clientWidth
      || this.bodyEl.clientWidth;
  }

  /**
   * @return {number}
   */
  getBodyHeight(): number {
    return window.innerHeight
      || this.docEl.clientHeight
      || this.bodyEl.clientHeight;
  }

  /**
   * @param {Object<HTMLElement>} el
   * @return {number} left Left relative to the viewport.
   */
  getCoordsLeft(el: HTMLElement): number {
    const body = this.bodyEl;
    const docEl = this.docEl;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;
    const left = el.getBoundingClientRect().left + scrollLeft - clientLeft;

    return left;
  }

  /**
   * @param {Object<HTMLElement>} el
   * @return {number} top Top relative to the viewport.
   */
  getCoordsTop(el: HTMLElement): number {
    const body = this.bodyEl;
    const docEl = this.docEl;
    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const clientTop = docEl.clientTop || body.clientTop || 0;
    const top = el.getBoundingClientRect().top + scrollTop - clientTop;

    return top;
  }

  /**
   * @param {Object<HTMLElement>} el
   * @return {Object<number, number>} left, top
   */
  getCoords(el: HTMLElement): object {
    const left = this.getCoordsLeft(el);
    const top = this.getCoordsTop(el);

    return { left, top };
  }
}
