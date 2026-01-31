import { By, PageElement, PageElements } from '@serenity-js/web';

export const HomePage = {
    menuCardCalled: (name: string) =>
        PageElement.located(By.cssContainingText('.card', name))
            .describedAs(`main menu card ${ name }`),
    menuCardTitles: () =>
        PageElements.located(By.css('.card-body h5'))
            .describedAs('main menu titles'),
};
