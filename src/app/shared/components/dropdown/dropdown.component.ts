import { Component, ElementRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor(public el: ElementRef) {
    // Set parent element css position to relative
    (<HTMLElement>this.el.nativeElement.parentNode).style.position = 'relative';
  }

  ngOnInit() {
  }
}
