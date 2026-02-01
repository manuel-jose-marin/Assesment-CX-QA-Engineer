import { Interaction, Task } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';

export const OpenMainSection = {
    called: (section: string) =>
        Task.where(`#actor opens the ${ section } section`,
            Interaction.where(`#actor navigates to ${ section } section`, async actor => {
                const pathMap: Record<string, string> = {
                    'Elements': '/elements',
                    'Forms': '/forms',
                    'Alerts, Frame & Windows': '/alertsWindows',
                    'Widgets': '/widgets',
                    'Interactions': '/interaction',
                    'Book Store Application': '/books',
                };

                const path = pathMap[section];
                if (!path) {
                    throw new Error(`Unknown main section: ${ section }`);
                }

                const page = await PlaywrightPage.current().answeredBy(actor);
                const nativePage = await page.nativePage();

                await nativePage.goto(`https://demoqa.com${ path }`, {
                    waitUntil: 'domcontentloaded',
                    timeout: 60_000,
                });
            }),
        ),
};
