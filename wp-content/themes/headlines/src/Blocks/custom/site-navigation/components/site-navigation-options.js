import React from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { props } from '@eightshift/frontend-libs/scripts';
import { ImageOptions } from '../../../components/image/components/image-options';
import { ButtonOptions } from '../../../components/button/components/button-options';

export const SiteNavigationOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('Site navigation', 'headlines')}>
			<ImageOptions
				{...props('logo', attributes, {
					setAttributes,
				})}
				showImageUse={false}
				showImageFull={false}
				showImageRoundedCorners={false}
				showImageBorder={false}
				showImageLink={true}
				showImageDecorationPosition={false}
				label={__('Logo', 'headlines')}
				reducedBottomSpacing
			/>

			<ButtonOptions
				{...props('buttonPrimary', attributes, { setAttributes })}
				label={__('Primary button', 'headlines')}
				reducedBottomSpacing
			/>

			<ButtonOptions
				{...props('buttonSecondary', attributes, { setAttributes })}
				label={__('Secondary button', 'headlines')}
				reducedBottomSpacing
			/>
		</PanelBody>
	);
};
