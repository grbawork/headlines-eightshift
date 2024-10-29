import React, { useMemo } from 'react';
import classnames from 'classnames';
import { outputCssVariables, getUnique, props, selector, checkAttr } from '@eightshift/frontend-libs/scripts';
import { ImageEditor } from '../../image/components/image-editor';
import { ParagraphEditor } from '../../paragraph/components/paragraph-editor';
import manifest from '../manifest.json';
import globalManifest from '../../../manifest.json';

export const CarouselCardItemEditor = (attributes) => {
	const unique = useMemo(() => getUnique(), []);

	const {
		componentClass,
	} = manifest;

	const {
		selectorClass = componentClass,
		blockClass,
		additionalClass,
		setAttributes,
	} = attributes;

	const carouselCardItemTagUse = checkAttr('carouselCardItemTagUse', attributes, manifest);
	const carouselCardItemDescriptionUse = checkAttr('carouselCardItemDescriptionUse', attributes, manifest);

	const carouselCardItemClass = classnames([
		selector(componentClass, componentClass),
		selector(blockClass, blockClass, selectorClass),
		selector(additionalClass, additionalClass),
		selector(!(carouselCardItemTagUse || carouselCardItemDescriptionUse), componentClass, 'full-image'),
	]);

	return (
		<div className={carouselCardItemClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<ImageEditor
				{...props('image', attributes, {
					setAttributes,
					blockClass: componentClass,
				})}
			/>

			<ParagraphEditor
				{...props('tag', attributes, {
					setAttributes,
					blockClass: componentClass,
					selectorClass: 'tag',
				})}
			/>

			<ParagraphEditor
				{...props('description', attributes, {
					setAttributes,
					blockClass: componentClass,
					selectorClass: 'description',
				})}
			/>
		</div>
	);
};
