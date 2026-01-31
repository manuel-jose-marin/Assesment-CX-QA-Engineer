import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Text } from '@serenity-js/web';

import { DroppablePage } from '../../ui/interactions/DroppablePage';

export const VerifyDroppableResult = () =>
    Task.where(`#actor verifies the drag and drop result`,
        Ensure.that(Text.of(DroppablePage.droppableArea()), includes('Dropped!')),
    );
