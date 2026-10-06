import React from 'react';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts';
import { AccordionItemEditor } from './components/accordion-item-editor';
import { AccordionItemOptions } from './components/accordion-item-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const AccordionItem = (props) => (
	// Set this attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			props.clientId,
			{
				wrapperUse: false,
				wrapperDisable: true,
				paragraphParagraphColor: 'white',
			},
		);
	}),
	<GutenbergBlock
		{...props}
		editor={AccordionItemEditor}
		options={AccordionItemOptions}
	/>
);
