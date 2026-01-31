import { Interaction, Task } from '@serenity-js/core';
import { PlaywrightPage } from '@serenity-js/playwright';
import { Click, Scroll } from '@serenity-js/web';

import { DroppablePage } from '../../ui/interactions/DroppablePage';

export const PerformDragAndDrop = () =>
    Task.where(`#actor drags and drops the element`,
        Click.on(DroppablePage.simpleTab()),
        Scroll.to(DroppablePage.draggableItem()),
        Interaction.where(`#actor performs drag and drop`, async actor => {
            const page = await PlaywrightPage.current().answeredBy(actor);
            const nativePage = await page.nativePage();
            const source = nativePage.locator(DroppablePage.draggableSelector);
            const target = nativePage.locator(DroppablePage.droppableSelector);

            try {
                await source.dragTo(target);
            } catch (error) {
                const sourceBox = await source.boundingBox();
                const targetBox = await target.boundingBox();

                if (!sourceBox || !targetBox) {
                    throw error;
                }

                await nativePage.mouse.move(
                    sourceBox.x + sourceBox.width / 2,
                    sourceBox.y + sourceBox.height / 2,
                );
                await nativePage.mouse.down();
                await nativePage.mouse.move(
                    targetBox.x + targetBox.width / 2,
                    targetBox.y + targetBox.height / 2,
                );
                await nativePage.mouse.up();
            }
        }),
    );
