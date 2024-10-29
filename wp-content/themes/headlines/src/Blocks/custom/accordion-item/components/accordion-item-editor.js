import React, { useState, useEffect } from 'react';
import { InnerBlocks, useBlockProps, store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import { selector, props, checkAttr } from '@eightshift/frontend-libs/scripts';
import { ParagraphEditor } from '../../../components/paragraph/components/paragraph-editor';
import manifest from '../manifest.json';

export const AccordionItemEditor = ({ clientId, attributes, setAttributes }) => {
    const {
        blockClass,
        accordionItemAllowedBlocks,
    } = attributes;

    const accordionItemStartOpen = checkAttr('accordionItemStartOpen', attributes, manifest);

    const accordionItemTriggerClass = selector(blockClass, blockClass, 'trigger');
    const accordionItemIconContainerClass = selector(blockClass, blockClass, 'icon-container');
    const accordionItemIconClass = selector(blockClass, blockClass, 'icon');
    const accordionItemPanelClass = selector(blockClass, blockClass, 'panel');
    const accordionItemContentClass = selector(blockClass, blockClass, 'content');

    const [open, setOpen] = useState(accordionItemStartOpen);

    const hasImageBlock = useSelect(select => {
        const { getBlocksByClientId } = select(blockEditorStore);
        const blocks = getBlocksByClientId(clientId)[0]?.innerBlocks || [];
        return blocks.some(block => block.name === 'eightshift-boilerplate/image');
    }, [clientId]);

    const allowedBlocks = hasImageBlock
        ? ['eightshift-boilerplate/paragraph'] // 'paragraph' is still allowed
        : accordionItemAllowedBlocks;

    return (
        <div {...useBlockProps()} className={blockClass} data-open={open}>
            <div className={accordionItemTriggerClass}>
                <ParagraphEditor
                    {...props('trigger', attributes, {
                        blockClass: blockClass,
                        setAttributes: setAttributes,
                    })}
                />

                <button className={accordionItemIconContainerClass} onClick={() => setOpen(!open)}>
                    <i className={accordionItemIconClass} dangerouslySetInnerHTML={{ __html: manifest.resources.icon }} />
                </button>
            </div>

            <section className={accordionItemPanelClass}>
                <div className={accordionItemContentClass}>
                    <InnerBlocks 
                        allowedBlocks={allowedBlocks}
                    />
                </div>
            </section>
        </div>
    );
};
