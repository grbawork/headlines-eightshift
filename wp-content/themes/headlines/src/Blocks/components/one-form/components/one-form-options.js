import React from 'react';
import { __ } from '@wordpress/i18n';
import {
	checkAttr,
	UseToggle,
	getAttrKey,
	props,
	OptionSelector,
	getOption,
	generateUseToggleConfig,
	icons,
} from '@eightshift/frontend-libs/scripts';
import manifest from '../manifest.json';

export const OneFormOptions = (attributes) => {
	const {
		setAttributes,
		oneFormShowControls = true,
	} = attributes;

	if (!oneFormShowControls) {
		return null;
	}

	const oneFormTheme = checkAttr('oneFormTheme', attributes, manifest);

	return (
		<UseToggle {...generateUseToggleConfig(attributes, manifest, 'oneFormUse')}>
			<OptionSelector
				inlineLabel
				icon={icons.color}
				value={oneFormTheme}
				options={getOption('oneFormTheme', attributes, manifest)}
				label={__('Theme', 'headlines')}
				onChange={(value) => setAttributes({ [getAttrKey('oneFormTheme', attributes, manifest)]: value })}
			/>
		</UseToggle>
	);
};
