import React, { useState } from 'react';
import { selector, props, checkAttr } from '@eightshift/frontend-libs/scripts';
import { ParagraphEditor } from '../../../components/paragraph/components/paragraph-editor';
import { ImageEditor } from '../../../components/image/components/image-editor';
import manifest from '../manifest.json';

export const AccordionItemExtendedEditor = ({ attributes, setAttributes }) => {
	const {
		blockClass,
	} = attributes;

	const accordionItemExtendedStartOpen = checkAttr('accordionItemExtendedStartOpen', attributes, manifest);

	const accordionItemExtendedTriggerClass = selector(blockClass, blockClass, 'trigger');
	const accordionItemExtendedIconContainerClass = selector(blockClass, blockClass, 'icon-container');
	const accordionItemExtendedIconClass = selector(blockClass, blockClass, 'icon');
	const accordionItemExtendedPanelClass = selector(blockClass, blockClass, 'panel');
	const accordionItemExtendedContentClass = selector(blockClass, blockClass, 'content');

	const [open, setOpen] = useState(accordionItemExtendedStartOpen);

	return (
		<div className={blockClass} data-open={open}>
			<div className={accordionItemExtendedTriggerClass}>
				<ParagraphEditor
					{...props('trigger', attributes, {
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>

				<button className={accordionItemExtendedIconContainerClass} onClick={() => setOpen(!open)}>
					<i className={accordionItemExtendedIconClass} dangerouslySetInnerHTML={{ __html: manifest.resources.icon }} />
				</button>
			</div>

			<section className={accordionItemExtendedPanelClass}>
				<div className={accordionItemExtendedContentClass}>
					<ParagraphEditor
						{...props('description', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
						})}
					/>

					<ImageEditor
						{...props('image', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
						})}
					/>
				</div>
			</section>
		</div>
	);
};
