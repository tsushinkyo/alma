import { AlmaPage } from './app.po';

describe('alma App', () => {
  let page: AlmaPage;

  beforeEach(() => {
    page = new AlmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
