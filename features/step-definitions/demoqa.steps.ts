import { Given, Then, When } from '@cucumber/cucumber';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';

import {
    CompletePracticeForm,
    CompleteTextBoxForm,
    ExpandAccordionPanels,
    OpenDemoQaHome,
    OpenMainSection,
    OpenNewTabFromBrowserWindows,
    SearchBooks,
    SelectSideMenuItem,
    TriggerAndAcceptSimpleAlert,
} from '../../test/demoqa/tasks';
import {
    VerifyAccordionPanelContent,
    VerifyBookStoreResults,
    VerifyDemoQaHome,
    VerifyNewTabOpened,
    VerifySimpleAlertMessage,
    VerifyTextBoxSubmission,
    VerifyPracticeFormSubmission,
    VerifyDroppableResult,
} from '../../test/demoqa/questions';
import { PerformDragAndDrop } from '../../test/demoqa/tasks/PerformDragAndDrop';

const accordionPanels = [
    'Where does it come from?',
];

const practiceFormData = {
    firstName: 'Laura',
    lastName: 'Gomez',
    email: 'laura.gomez@example.com',
    gender: 'Female',
    mobile: '3115557788',
};

Given('the user opens the DemoQA home page', async () =>
    actorCalled('User').attemptsTo(
        OpenDemoQaHome(),
    )
);

When('the user opens the {string} section from the main menu', async (section: string) =>
    actorInTheSpotlight().attemptsTo(
        OpenMainSection.called(section),
    )
);

When('selects {string} in the side menu', async (item: string) =>
    actorInTheSpotlight().attemptsTo(
        SelectSideMenuItem.called(item),
    )
);

When('completes the Text Box form with name {string} and email {string}', async (fullName: string, email: string) =>
    actorInTheSpotlight().attemptsTo(
        CompleteTextBoxForm.with(fullName, email),
    )
);

When('completes the Practice Form with valid data', async () =>
    actorInTheSpotlight().attemptsTo(
        CompletePracticeForm.with(practiceFormData),
    )
);

When('triggers and accepts a simple alert', async () =>
    actorInTheSpotlight().attemptsTo(
        TriggerAndAcceptSimpleAlert(),
    )
);

When('opens a new tab from Browser Windows', async () =>
    actorInTheSpotlight().attemptsTo(
        OpenNewTabFromBrowserWindows(),
    )
);

When('expands the accordion panels', async () =>
    actorInTheSpotlight().attemptsTo(
        ExpandAccordionPanels.named(accordionPanels),
    )
);

When('drags the element into the target area', async () =>
    actorInTheSpotlight().attemptsTo(
        PerformDragAndDrop(),
    )
);

When('searches for the term {string} in the Book Store', async (term: string) =>
    actorInTheSpotlight().attemptsTo(
        SearchBooks.forTerm(term),
    )
);

Then('the page title and main menu sections should be visible', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyDemoQaHome(),
    )
);

Then('the name and email should be reflected in the output section', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyTextBoxSubmission.with('Juan Perez', 'juan.perez@example.com'),
    )
);

Then('a successful submission confirmation should be displayed', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyPracticeFormSubmission(),
    )
);

Then('the alert is accepted and the new tab opens correctly', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifySimpleAlertMessage(),
        VerifyNewTabOpened(),
    )
);

Then('the content of each panel should be visible', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyAccordionPanelContent.forPanels(accordionPanels),
    )
);

Then('the target area should indicate the element was dropped', async () =>
    actorInTheSpotlight().attemptsTo(
        VerifyDroppableResult(),
    )
);

Then('related results containing {string} should be displayed', async (term: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyBookStoreResults.containing(term),
    )
);
