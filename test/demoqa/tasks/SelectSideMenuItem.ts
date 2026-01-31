import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';

import { LeftMenu } from '../../ui/common/LeftMenu';

export const SelectSideMenuItem = {
    called: (item: string) =>
        Task.where(`#actor selects ${ item } in the side menu`,
            Click.on(LeftMenu.itemCalled(item)),
        ),
};
