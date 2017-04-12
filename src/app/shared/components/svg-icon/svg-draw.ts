export class SvgDraw {
  size: number = 25;
  viewbox: string = `0 0 25 25`;
  path: string;

  constructor(private svgDraw: Object = {}) {
    Object.assign(this, svgDraw);
  }

}
