import React from 'react';
import { useSelect } from '@wordpress/data';
import { overrideInnerBlockAttributes } from '@eightshift/frontend-libs/scripts';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts/editor';
import { CarouselCardEditor } from './components/carousel-card-editor';
import { CarouselCardOptions } from './components/carousel-card-options';

export const CarouselCard = (props) => {
	const {
		clientId,
	} = props;

	// Set this attributes to all inner blocks once inserted in DOM.
	useSelect((select) => {
		overrideInnerBlockAttributes(
			select,
			clientId,
			{
				wrapperUse: false,
				wrapperDisable: true,
			}
		);
	});

	return (
		<GutenbergBlock 
			{...props}
			editor={CarouselCardEditor}
			options={CarouselCardOptions}
		/>
	);
};
