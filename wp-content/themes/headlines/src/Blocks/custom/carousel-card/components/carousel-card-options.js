import React from 'react';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { checkAttr } from '@eightshift/frontend-libs/scripts';
import { IconToggle, getAttrKey, icons, Notification } from '@eightshift/frontend-libs/scripts';
import manifest from '../manifest.json';

export const CarouselCardOptions = ({ attributes, setAttributes, clientId }) => {
	const carouselCardAllowDrag = checkAttr('carouselCardAllowDrag', attributes, manifest);
	const carouselCardAllowKeyboardControls = checkAttr('carouselCardAllowKeyboardControls', attributes, manifest);

	const innerBlockCount = useSelect((select) => select( 'core/block-editor' ).getBlock(clientId).innerBlocks);

	return (
		<PanelBody title={__('Carousel: Card', 'headlines')}>
			{innerBlockCount.length < 6 &&
				<Notification
					type='warning'
					text={__('Not enough items!', 'headlines')}
					subtitle={__('Add at least 6 items to follow the design', 'headlines')}
				/>
			}

			<IconToggle
				icon={icons.pointerHand}
				label={__('Click and drag to scroll', 'headlines')}
				checked={carouselCardAllowDrag}
				onChange={(value) => setAttributes({ [getAttrKey('carouselCardAllowDrag', attributes, manifest)]: value })}
				reducedBottomSpacing
			/>

			<IconToggle
				icon={icons.videoSubtitle}
				label={__('Keyboard control', 'headlines')}
				checked={carouselCardAllowKeyboardControls}
				onChange={(value) => setAttributes({ [getAttrKey('carouselCardAllowKeyboardControls', attributes, manifest)]: value })}
				noBottomSpacing
			/>
		</PanelBody>
	);
};
