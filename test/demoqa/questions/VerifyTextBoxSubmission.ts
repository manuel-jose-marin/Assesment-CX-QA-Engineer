import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Text } from '@serenity-js/web';

import { TextBoxPage } from '../../ui/elements/TextBoxPage';

export const VerifyTextBoxSubmission = {
    with: (fullName: string, email: string) =>
        Task.where(`#actor verifies the Text Box submission`,
            Ensure.that(Text.of(TextBoxPage.outputName()), includes(fullName)),
            Ensure.that(Text.of(TextBoxPage.outputEmail()), includes(email)),
        ),
};
