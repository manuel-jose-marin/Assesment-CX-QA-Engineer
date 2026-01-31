import { By, PageElement } from '@serenity-js/web';

export const BrowserWindowsPage = {
    newTabButton: () =>
        PageElement.located(By.id('tabButton')).describedAs('New Tab button'),
    newTabButtonSelector: '#tabButton',
};
