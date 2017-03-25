import { SparkmeFrontendPage } from './app.po';

describe('sparkme-frontend App', () => {
  let page: SparkmeFrontendPage;

  beforeEach(() => {
    page = new SparkmeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
