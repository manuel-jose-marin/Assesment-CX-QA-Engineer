import { By, PageElement } from '@serenity-js/web';

export const TextBoxPage = {
    fullNameField: () =>
        PageElement.located(By.id('userName')).describedAs('Full Name field'),
    emailField: () =>
        PageElement.located(By.id('userEmail')).describedAs('Email field'),
    submitButton: () =>
        PageElement.located(By.id('submit')).describedAs('Submit button'),
    outputName: () =>
        PageElement.located(By.id('name')).describedAs('name output'),
    outputEmail: () =>
        PageElement.located(By.id('email')).describedAs('email output'),
};
