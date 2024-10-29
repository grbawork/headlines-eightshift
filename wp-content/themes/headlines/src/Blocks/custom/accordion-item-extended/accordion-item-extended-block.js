import React from 'react';

import { AccordionItemExtendedEditor } from './components/accordion-item-extended-editor';
import { AccordionItemExtendedOptions } from './components/accordion-item-extended-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const AccordionItemExtended = (props) => (
	<GutenbergBlock
		{...props}
		editor={AccordionItemExtendedEditor}
		options={AccordionItemExtendedOptions}
	/>
);
