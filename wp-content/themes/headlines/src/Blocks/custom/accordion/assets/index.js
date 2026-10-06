import domReady from '@wordpress/dom-ready';
import manifest from './../manifest.json';

domReady(async () => {
    const accordionSelector = `.${manifest.blockJsClass}`;
    // Combined selectors - include standard and extended accordion items
    const accordionItemSelector = `.${manifest.blockJsClass}-item, .${manifest.blockJsClass}-item-extended`;
    const accordionElements = document.querySelectorAll(accordionSelector);

    if (!accordionElements.length) {
        return;
    }

    const { Accordion } = await import('./accordion');

    accordionElements.forEach((item) => {
        const accordionItems = item.querySelectorAll(accordionItemSelector);
        const itemSelector = `${accordionSelector}-item, ${accordionSelector}-item-extended`;
        const triggerSelector = `${accordionSelector}-item-trigger, ${accordionSelector}-item-extended-trigger`;
        const panelSelector = `${accordionSelector}-item-panel, ${accordionSelector}-item-extended-panel`;

        const accordion = new Accordion({
            containerElement: item,
            accordionItems: accordionItems,
            itemSelector: itemSelector,
            triggerSelector: triggerSelector,
            panelSelector: panelSelector,
        });

        accordion.init();
    });
});
