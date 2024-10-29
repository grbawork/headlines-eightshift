import React from 'react';
import { props } from '@eightshift/frontend-libs/scripts';
import { CarouselCardItemEditor as CarouselCardItemEditorComponent } from '../../../components/carousel-card-item/components/carousel-card-item-editor';

export const CarouselCardItemEditor = ({ attributes, setAttributes }) => {
	return (
		<CarouselCardItemEditorComponent
			{...props('carouselCardItem', attributes, {
				setAttributes,
			})}
		/>
	);
};
