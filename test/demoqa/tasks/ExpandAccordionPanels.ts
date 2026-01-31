import { Task } from '@serenity-js/core';
import { Click, Scroll } from '@serenity-js/web';

import { AccordionPage } from '../../ui/widgets/AccordionPage';

export const ExpandAccordionPanels = {
    named: (panelTitles: string[]) =>
        Task.where(`#actor expands the accordion panels`,
            ...panelTitles.flatMap((title, index) => [
                Scroll.to(AccordionPage.panelHeading(title)),
                Click.on(AccordionPage.panelHeading(title)),
            ]),
        ),
};
