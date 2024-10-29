import React, { useMemo } from 'react';
import _ from 'lodash';
import { InnerBlocks } from '@wordpress/block-editor';
import { checkAttr, props, outputCssVariables, getUnique, classnames, bem, BlockInserter } from '@eightshift/frontend-libs/scripts';
import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { IconEditor } from '../../../components/icon/components/icon-editor';
import manifest from '../manifest.json';
import globalManifest from '../../../manifest.json';

export const CarouselCardEditor = ({ attributes, setAttributes, clientId }) => {
	const {
		blockClass,
	} = attributes;

	const unique = useMemo(() => getUnique(), []);

	const carouselCardAllowedBlocks = checkAttr('carouselCardAllowedBlocks', attributes, manifest);

	const carouselCardClass = blockClass;

	const carouselCardSliderClass = classnames(
		bem(blockClass, blockClass, 'carousel-slider'),
	);

	const carouselCardItemsClass = classnames(
		bem(blockClass, blockClass, 'carousel-items'),
	);

	const carouselCardIconsClass = classnames(
		bem(blockClass, blockClass, 'carousel-icons'),
	);

	return (
		<div className={carouselCardClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<HeadingEditor
				{...props('heading', attributes, {
					blockClass: blockClass,
					setAttributes,
				})}
			/>

			<div className={carouselCardSliderClass}>
				<div className={carouselCardIconsClass}>
					<IconEditor
						{...props('iconLeft', attributes, {
							blockClass: blockClass,
						})}
					/>

					<IconEditor
						{...props('iconRight', attributes, {
							blockClass: blockClass,
						})}
					/>
				</div>
				<div className={carouselCardItemsClass}>
					<InnerBlocks
						orientation='horizontal'
						allowedBlocks={!_.isEmpty(carouselCardAllowedBlocks) ? carouselCardAllowedBlocks : undefined}
						renderAppender={() => <BlockInserter clientId={clientId} />}
					/>
				</div>
			</div>
		</div>
	);
};
