import { Interaction, Task, TakeNotes } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';

import { AlertsPage } from '../../ui/alerts/AlertsPage';

export const TriggerAndAcceptSimpleAlert = () =>
    Task.where(`#actor accepts the simple alert`,
        Interaction.where(`#actor triggers and accepts the alert`, async actor => {
            const page = await PlaywrightPage.current().answeredBy(actor);
            const nativePage = await page.nativePage();
            const dialogPromise = nativePage.waitForEvent('dialog');

            await nativePage.click(AlertsPage.simpleAlertButtonSelector);

            const dialog = await dialogPromise;
            TakeNotes.as(actor).notepad.set('simpleAlertMessage', dialog.message());
            try {
                await dialog.accept();
            } catch (error) {
                if (! String(error).includes('already handled')) {
                    throw error;
                }
            }
        }),
    );
