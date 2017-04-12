import { SvgDraw } from './svg-draw';

describe('SvgDraw', () => {
  it('should create an instance', () => {
    expect(new SvgDraw()).toBeTruthy();
  });

  it('should accept values in constructor', () => {
    let svgDraw = new SvgDraw({
      size: 30,
      viewbox:`0 0 30 30`,
      path: ''
    });

    expect(svgDraw.size).toEqual(30);
    expect(svgDraw.viewbox).toEqual(`0 0 30 30`);
    expect(svgDraw.path).toEqual('');
  });
});
