import { HttpclientPage } from './app.po';

describe('httpclient App', () => {
  let page: HttpclientPage;

  beforeEach(() => {
    page = new HttpclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
