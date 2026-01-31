import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { HomePage } from '../../ui/home/HomePage';

export const OpenMainSection = {
    called: (section: string) =>
        Task.where(`#actor opens the ${ section } section`,
            Click.on(HomePage.menuCardCalled(section)),
        ),
};
