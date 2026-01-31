import { By, PageElement } from '@serenity-js/web';

export const BookStorePage = {
    searchInput: () =>
        PageElement.located(By.id('searchBox')).describedAs('book search input'),
    resultsTable: () =>
        PageElement.located(By.css('.rt-tbody')).describedAs('book results table'),
};
