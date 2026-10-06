import React from 'react';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts/editor';
import { OneFormEditor } from './components/one-form-editor';
import { OneFormOptions } from './components/one-form-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts/editor';

export const OneForm = (props) => {
	const {
		clientId,
	} = props;

	// Set this attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			clientId,
			{
				wrapperDisable: true,
			}
		);
	});

	return (
		<GutenbergBlock 
			{...props}
			editor={OneFormEditor}
			options={OneFormOptions}
		/>
	);
};
