import { Angular5TutPage } from './app.po';

describe('angular5-tut App', function() {
  let page: Angular5TutPage;

  beforeEach(() => {
    page = new Angular5TutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
