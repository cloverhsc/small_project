import { SafetyVillagePage } from './app.po';

describe('safety-village App', function() {
  let page: SafetyVillagePage;

  beforeEach(() => {
    page = new SafetyVillagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
