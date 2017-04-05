import { Component, Input, OnInit } from '@angular/core';

import { SvgDraw } from './svg-draw';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() draw: SvgDraw;

  constructor() { }

  ngOnInit() {
  }

}
