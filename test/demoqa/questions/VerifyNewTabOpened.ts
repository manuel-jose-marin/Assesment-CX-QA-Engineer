import { Ensure, isGreaterThan } from '@serenity-js/assertions';
import { Question, Task } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';

const NumberOfOpenPages = () =>
    Question.about<number>('number of open tabs', async actor => {
        const page = await PlaywrightPage.current().answeredBy(actor);
        const nativePage = await page.nativePage();
        return nativePage.context().pages().length;
    });

export const VerifyNewTabOpened = () =>
    Task.where(`#actor verifies that a new tab opened`,
        Ensure.that(NumberOfOpenPages(), isGreaterThan(1)),
    );
