import { Interaction, Task } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';

import { BrowserWindowsPage } from '../../ui/alerts/BrowserWindowsPage';

export const OpenNewTabFromBrowserWindows = () =>
    Task.where(`#actor opens a new tab`,
        Interaction.where(`#actor opens a new tab from Browser Windows`, async actor => {
            const page = await PlaywrightPage.current().answeredBy(actor);
            const nativePage = await page.nativePage();
            const context = nativePage.context();

            await Promise.all([
                context.waitForEvent('page'),
                nativePage.click(BrowserWindowsPage.newTabButtonSelector),
            ]);
        }),
    );
