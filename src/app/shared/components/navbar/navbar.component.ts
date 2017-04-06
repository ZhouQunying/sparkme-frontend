import { Component, OnInit } from '@angular/core';

import { SvgDraw } from '../svg-icon/svg-draw';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchIconDraw: SvgDraw;
  searchInputShow: boolean;

  constructor() {
    this.searchIconDraw = {
      size: 25,
      viewbox: `0 0 25 25`,
      path: `M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z`
    }
  }

  ngOnInit() {
  }

  searchInputToggle() {
    this.searchInputShow = !this.searchInputShow;
  }
}
