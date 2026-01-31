import { By, PageElement } from '@serenity-js/web';

export const PracticeFormPage = {
    firstNameField: () =>
        PageElement.located(By.id('firstName')).describedAs('First Name field'),
    lastNameField: () =>
        PageElement.located(By.id('lastName')).describedAs('Last Name field'),
    emailField: () =>
        PageElement.located(By.id('userEmail')).describedAs('Email field'),
    genderOption: (gender: string) =>
        PageElement.located(By.cssContainingText('.custom-radio label', gender))
            .describedAs(`gender option ${ gender }`),
    mobileField: () =>
        PageElement.located(By.id('userNumber')).describedAs('Mobile Number field'),
    submitButton: () =>
        PageElement.located(By.id('submit')).describedAs('Submit button'),
    confirmationModalTitle: () =>
        PageElement.located(By.id('example-modal-sizes-title-lg'))
            .describedAs('confirmation modal title'),
};
