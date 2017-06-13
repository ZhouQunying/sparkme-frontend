import { Component, OnInit, trigger, state, style, transition,
  animate, ViewChild, ElementRef, HostListener } from '@angular/core';

import { ViewportService } from '../../services/viewport/viewport.service';

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

  searchInputState: string = 'inactive';
  searchInput: HTMLInputElement;

  constructor(private viewportService: ViewportService) { }

  @ViewChild('searchInput') searchInputEl: ElementRef;

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth < 1000) {
      this.searchInputState = 'inactive';
    }
  }

  ngOnInit() {
    this.searchInput = this.searchInputEl.nativeElement;
  }

  searchInputToggle() {
    // When the width of window is greater then 1000,
    // use the inner search input to search for, or link to search page
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
      console.log(this.searchInput.value, 'With search page');
    }
  }

  searchInputOnBlur() {
    if (!this.searchInput.value.trim()) {
      this.setSearchInputInactive();
    }
  }

  searchInputOnEnter() {
    if (this.searchInput.value.trim()) {
      this.searchWithPopup();
    }
  }

  setSearchInputInactive() {
    this.searchInputState = 'inactive';
    this.searchInput.value = '';
  }

  searchWithPopup() {
    // Todo: search with popup
    console.log(this.searchInput.value, 'With popup');
  }
}
