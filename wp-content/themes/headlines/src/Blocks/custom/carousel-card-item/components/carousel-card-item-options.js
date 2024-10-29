import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { props } from '@eightshift/frontend-libs/scripts';
import { CarouselCardItemOptions as CarouselCardItemOptionsComponent } from '../../../components/carousel-card-item/components/carousel-card-item-options';

export const CarouselCardItemOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('Carousel: Card item', 'headlines')}>
			<CarouselCardItemOptionsComponent
				{...props('carouselCardItem', attributes, {
					setAttributes,
				})}
			/>
		</PanelBody>
	);
};
