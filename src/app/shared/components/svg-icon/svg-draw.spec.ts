import { SvgDraw } from './svg-draw';

describe('SvgDraw', () => {
  it('should create an instance', () => {
    expect(new SvgDraw()).toBeTruthy();
  });

  it('should accept values in constructor', () => {
    const svgDraw = new SvgDraw({
      width: 30,
      height: 30,
      viewbox:`0 0 30 30`,
      path: ''
    });

    expect(svgDraw.width).toEqual(30);
    expect(svgDraw.height).toEqual(30);
    expect(svgDraw.viewbox).toEqual(`0 0 30 30`);
    expect(svgDraw.path).toEqual('');
  });
});
