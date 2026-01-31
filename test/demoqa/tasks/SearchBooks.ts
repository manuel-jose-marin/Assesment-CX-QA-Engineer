import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/web';

import { BookStorePage } from '../../ui/bookstore/BookStorePage';

export const SearchBooks = {
    forTerm: (term: string) =>
        Task.where(`#actor searches books for term ${ term }`,
            Enter.theValue(term).into(BookStorePage.searchInput()),
        ),
};
