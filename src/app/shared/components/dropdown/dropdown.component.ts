import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(public el: ElementRef) { }

  ngOnInit() {
    const parentNode: HTMLElement = this.el.nativeElement.parentNode;
    const appDropdownEl: HTMLElement = this.el.nativeElement.querySelector('.app-dropdown');

    // Set parent element css position to relative
    parentNode.style.position = 'relative';
    // Set css position of container element
    if (appDropdownEl) {
      appDropdownEl.style.left = `calc(-50% + ${parentNode.clientWidth / 2}px)`;
    }
  }
}
