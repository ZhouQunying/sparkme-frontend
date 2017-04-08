import { Component, Input, OnInit } from '@angular/core';

export class SvgDraw {
  constructor(
    private size: number,
    private viewbox: string,
    private path: string) { }
}

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
