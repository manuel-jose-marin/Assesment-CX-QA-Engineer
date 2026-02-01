import { Interaction, Task } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';

export const OpenDemoQaHome = () =>
    Task.where(`#actor opens the DemoQA home page`,
        Interaction.where(`#actor navigates to DemoQA`, async actor => {
            const page = await PlaywrightPage.current().answeredBy(actor);
            const nativePage = await page.nativePage();

            await nativePage.goto('https://demoqa.com/', {
                waitUntil: 'domcontentloaded',
                timeout: 60_000,
            });
        }),
    );
