import React from 'react';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';
import { AccordionEditor } from './components/accordion-editor';
import { AccordionOptions } from './components/accordion-options';

export const Accordion = (props) => (
	// Set this attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			props.clientId,
			{
				wrapperUse: false,
				wrapperDisable: true,
				wrapperNoControls: true,
			},
		);
	}),
	<GutenbergBlock
		{...props}
		editor={AccordionEditor}
		options={AccordionOptions}
	/>
);
