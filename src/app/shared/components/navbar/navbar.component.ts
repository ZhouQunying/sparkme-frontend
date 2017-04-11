import { Component, OnInit, trigger, state, style, transition, animate, ViewChild, ElementRef, HostListener } from '@angular/core';

import { ViewportService } from '../../services/viewport/viewport.service';
import { SvgDraw } from '../svg-icon/svg-icon.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('searchInputState', [
      state('inactive', style({width: '0', })),
      state('active', style({width: '*', })),
      transition('inactive <=> active', animate('200ms ease-out'))
    ])
  ]
})
export class NavbarComponent implements OnInit {

  private searchIconDraw: SvgDraw = new SvgDraw(25, `0 0 25 25`, `M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z`);
  private searchInputState: string = 'inactive';
  private searchInput: any;

  constructor(private viewportService: ViewportService) { }

  @ViewChild('searchInput') private searchInputEl: ElementRef;

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth < 1000) {
      this.searchInputState = 'inactive';
    }
  }

  ngOnInit() {
    this.searchInput = <HTMLScriptElement>this.searchInputEl.nativeElement;
  }

  private searchInputToggle() {
    // When the width of window is greater then 1000, use the inner search input to search for, or link to search page
    if (this.viewportService.getWindowWidth() >= 1000) {
      if (this.searchInputState === 'active') {
        if (!this.searchInput.value.trim()) {
          this.setSearchInputInactive();
        } else {
          this.searchWithPopup();
        }
      } else {
        this.searchInputState = 'active';
        this.searchInput.focus();
      }
    } else {
      // Todo: link to search page
    }
  }

  private searchInputOnBlur() {
    if (!this.searchInput.value.trim()) {
      this.setSearchInputInactive();
    }
  }

  private searchInputOnEnter() {
    if (this.searchInput.value.trim()) {
      this.searchWithPopup();
    }
  }

  private setSearchInputInactive() {
    this.searchInputState = 'inactive';
    this.searchInput.value = '';
  }

  private searchWithPopup() {
    console.log(this.searchInput.value, 'With popup');
  }
}
