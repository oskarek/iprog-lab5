import { IprogLab5Page } from './app.po';

describe('iprog-lab5 App', () => {
  let page: IprogLab5Page;

  beforeEach(() => {
    page = new IprogLab5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
