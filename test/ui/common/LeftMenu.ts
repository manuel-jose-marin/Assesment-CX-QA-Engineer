import { By, PageElement } from '@serenity-js/web';

export const LeftMenu = {
    itemCalled: (name: string) =>
        PageElement.located(By.cssContainingText('.element-list .menu-list li span', name))
            .describedAs(`side menu option ${ name }`),
};
