import React from 'react';
import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { props } from '@eightshift/frontend-libs/scripts';
import { OneFormOptions as OneFormOptionsComponent } from '../../../components/one-form/components/one-form-options';

export const OneFormOptions = ({ attributes, setAttributes }) => {
	return (
		<PanelBody title={__('One Form', 'headlines')}>
			<OneFormOptionsComponent
				{...props('oneForm', attributes, {
					setAttributes,
				})}
				noLabel
				noUseToggle
				noExpandButton
			/>
		</PanelBody>
	);
};
