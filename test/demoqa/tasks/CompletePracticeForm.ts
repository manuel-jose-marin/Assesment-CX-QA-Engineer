import { Task } from '@serenity-js/core';
import { Click, Enter, Scroll } from '@serenity-js/web';

import { PracticeFormPage } from '../../ui/forms/PracticeFormPage';

interface PracticeFormData {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobile: string;
}

export const CompletePracticeForm = {
    with: (data: PracticeFormData) =>
        Task.where(`#actor completes the Practice Form`,
            Enter.theValue(data.firstName).into(PracticeFormPage.firstNameField()),
            Enter.theValue(data.lastName).into(PracticeFormPage.lastNameField()),
            Enter.theValue(data.email).into(PracticeFormPage.emailField()),
            Click.on(PracticeFormPage.genderOption(data.gender)),
            Enter.theValue(data.mobile).into(PracticeFormPage.mobileField()),
            Scroll.to(PracticeFormPage.submitButton()),
            Click.on(PracticeFormPage.submitButton()),
        ),
};
