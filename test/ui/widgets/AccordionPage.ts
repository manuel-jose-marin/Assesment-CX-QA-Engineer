import { By, PageElement } from '@serenity-js/web';

const panelMap: Record<string, { headingId: string; contentId: string }> = {
    'What is Lorem Ipsum?': {
        headingId: 'section1Heading',
        contentId: 'section1Content',
    },
    'Where does it come from?': {
        headingId: 'section2Heading',
        contentId: 'section2Content',
    },
    'Why do we use it?': {
        headingId: 'section3Heading',
        contentId: 'section3Content',
    },
};

export const AccordionPage = {
    panelHeading: (title: string) =>
        PageElement.located(By.id(panelMap[title].headingId))
            .describedAs(`panel heading ${ title }`),
    panelContent: (title: string) =>
        PageElement.located(By.id(panelMap[title].contentId))
            .describedAs(`panel content ${ title }`),
};
