import { Task } from '@serenity-js/core';
import { Click, Enter, Scroll } from '@serenity-js/web';

import { TextBoxPage } from '../../ui/elements/TextBoxPage';

export const CompleteTextBoxForm = {
    with: (fullName: string, email: string) =>
        Task.where(`#actor completes the Text Box form`,
            Enter.theValue(fullName).into(TextBoxPage.fullNameField()),
            Enter.theValue(email).into(TextBoxPage.emailField()),
            Scroll.to(TextBoxPage.submitButton()),
            Click.on(TextBoxPage.submitButton()),
        ),
};
