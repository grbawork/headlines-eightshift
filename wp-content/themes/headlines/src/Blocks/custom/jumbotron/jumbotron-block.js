import React from 'react';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts';
import { JumbotronEditor } from './components/jumbotron-editor';
import { JumbotronOptions } from './components/jumbotron-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const Jumbotron = (props) => (
	// Set this attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			props.clientId,
			{
				wrapperUse: false,
				wrapperDisable: true,
				paragraphParagraphColor: 'white',
				headingHeadingColor: 'white',
			},
		);
	}),
	<GutenbergBlock
		{...props}
		editor={JumbotronEditor}
		options={JumbotronOptions}
	/>
);
