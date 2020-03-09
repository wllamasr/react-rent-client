browser.waitForAngularEnabled(false);

describe('protactor react test', () => {
    beforeEach(function () {
        browser.get('http://localhost:3000/admin');
    });

    it('match title', () => {
        expect(browser.getTitle()).toEqual('Renting App');
    });

    it('click new item button', () => {
        element(by.id('create-new-item')).click();
    });
})