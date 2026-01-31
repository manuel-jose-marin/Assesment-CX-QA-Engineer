import { By, PageElement } from '@serenity-js/web';

export const AlertsPage = {
    simpleAlertButton: () =>
        PageElement.located(By.id('alertButton')).describedAs('simple alert button'),
    simpleAlertButtonSelector: '#alertButton',
};
