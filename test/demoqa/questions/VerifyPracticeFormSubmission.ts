import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { isVisible, Text } from '@serenity-js/web';

import { PracticeFormPage } from '../../ui/forms/PracticeFormPage';

export const VerifyPracticeFormSubmission = () =>
    Task.where(`#actor verifies the Practice Form submission`,
        Ensure.that(PracticeFormPage.confirmationModalTitle(), isVisible()),
        Ensure.that(Text.of(PracticeFormPage.confirmationModalTitle()), includes('Thanks for submitting the form')),
    );
