import { Ensure, includes } from '@serenity-js/assertions';
import { Task, Wait } from '@serenity-js/core';
import { Scroll, isVisible, Text } from '@serenity-js/web';

import { AccordionPage } from '../../ui/widgets/AccordionPage';

export const VerifyAccordionPanelContent = {
    forPanels: (panelTitles: string[]) =>
        Task.where(`#actor verifies accordion panel content`,
            ...panelTitles.flatMap(title => [
                Scroll.to(AccordionPage.panelHeading(title)),
                Wait.until(AccordionPage.panelContent(title), isVisible()),
                Ensure.that(Text.of(AccordionPage.panelContent(title)), includes('Lorem')),
            ]),
        ),
};
