import { Ensure, includes } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { Text } from '@serenity-js/web';

import { BookStorePage } from '../../ui/bookstore/BookStorePage';

export const VerifyBookStoreResults = {
    containing: (term: string) =>
        Task.where(`#actor verifies Book Store results`,
            Ensure.that(Text.of(BookStorePage.resultsTable()), includes(term)),
        ),
};
