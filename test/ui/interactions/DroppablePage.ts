import { By, PageElement } from '@serenity-js/web';

export const DroppablePage = {
    simpleTab: () =>
        PageElement.located(By.id('droppableExample-tab-simple')).describedAs('Simple tab'),
    draggableItem: () =>
        PageElement.located(By.css('#droppableExample-tabpane-simple #draggable')).describedAs('draggable item'),
    droppableArea: () =>
        PageElement.located(By.css('#droppableExample-tabpane-simple #droppable')).describedAs('drop target'),
    draggableSelector: '#droppableExample-tabpane-simple #draggable',
    droppableSelector: '#droppableExample-tabpane-simple #droppable',
};
