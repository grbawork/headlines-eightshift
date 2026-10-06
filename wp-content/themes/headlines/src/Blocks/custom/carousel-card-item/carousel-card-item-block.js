import React from 'react';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts/editor';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts/editor';
import { CarouselCardItemEditor } from './components/carousel-card-item-editor';
import { CarouselCardItemOptions } from './components/carousel-card-item-options';

export const CarouselCardItem = (props) => {
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
				wrapperUse: false,
			}
		);
	});

	return (
		<GutenbergBlock 
			{...props}
			editor={CarouselCardItemEditor}
			options={CarouselCardItemOptions}
		/>
	);
};
