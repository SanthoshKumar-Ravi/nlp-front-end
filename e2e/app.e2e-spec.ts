import { SwisItPage } from './app.po';

describe('swis-it App', () => {
  let page: SwisItPage;

  beforeEach(() => {
    page = new SwisItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
