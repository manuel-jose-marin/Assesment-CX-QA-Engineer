import { Ensure, includes } from '@serenity-js/assertions';
import { Task, notes } from '@serenity-js/core';

export const VerifySimpleAlertMessage = () =>
    Task.where(`#actor verifies the simple alert`,
        Ensure.that(notes().get('simpleAlertMessage'), includes('You clicked a button')),
    );
