import React, { useMemo } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import classnames from 'classnames';
import {
	outputCssVariables,
	getUnique,
	props,
	checkAttr,
	selector,
} from '@eightshift/frontend-libs/scripts';
import manifest from '../manifest.json';
import globalManifest from '../../../manifest.json';

export const OneFormEditor = (attributes) => {
	const unique = useMemo(() => getUnique(), []);
	const {
		componentClass,
	} = manifest;

	const {
		selectorClass = componentClass,
		blockClass,
		additionalClass,
	} = attributes;

	const oneFormUse = checkAttr('oneFormUse', attributes, manifest);
	const oneFormFormUse = checkAttr('oneFormFormUse', attributes, manifest);

	if (!oneFormUse) {
		return null;
	}

	const oneFormClass = classnames([
		selector(componentClass, componentClass),
		selector(blockClass, blockClass, selectorClass),
		selector(additionalClass, additionalClass),
	]);

	const contentClass = classnames([
		selector(componentClass, componentClass, 'content'),
	]);

	const oneFormFormClass = classnames([
		selector(componentClass, componentClass, 'form'),
	]);

	const oneFormFormAllowedBlocks = checkAttr('oneFormFormAllowedBlocks', attributes, manifest);

	return (
		<div className={oneFormClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<div className={contentClass}>

				{oneFormFormUse &&
					<div className={oneFormFormClass}>
						<InnerBlocks
							orientation="horizontal"
							allowedBlocks={(typeof oneFormFormAllowedBlocks === 'undefined') || oneFormFormAllowedBlocks}
							template={[(typeof oneFormFormAllowedBlocks === 'undefined') || oneFormFormAllowedBlocks]}
							templateLock={'all'}
						/>
					</div>
				}
			</div>

		</div>
	);
};
