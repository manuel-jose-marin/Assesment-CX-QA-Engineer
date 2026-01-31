import { Ensure, contain, includes } from '@serenity-js/assertions';
import { Task, Wait } from '@serenity-js/core';
import { Page, Text } from '@serenity-js/web';

import { HomePage } from '../../ui/home/HomePage';

const mainSections = [
    'Elements',
    'Forms',
    'Alerts, Frame & Windows',
    'Widgets',
    'Interactions',
    'Book Store Application',
];

export const VerifyDemoQaHome = () =>
    Task.where(`#actor verifies the DemoQA home page`,
        Ensure.that(Page.current().title(), includes('DEMOQA')),
        ...mainSections.flatMap(section => [
            Wait.until(Text.ofAll(HomePage.menuCardTitles()), contain(section)),
            Ensure.that(Text.ofAll(HomePage.menuCardTitles()), contain(section)),
        ]),
    );
