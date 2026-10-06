import React from 'react';
import { __ } from '@wordpress/i18n';
import { props, getOptions, checkAttr, getOption, getAttrKey, IconLabel, icons, IconToggle, LinkEditComponent, ColorPicker, Section, classnames } from '@eightshift/frontend-libs/scripts';
import { ImageOptions } from '../../image/components/image-options';
import { ParagraphOptions } from '../../paragraph/components/paragraph-options';
import manifest from '../manifest.json';

export const CarouselCardItemOptions = (attributes) => {
	const {
		setAttributes,
		showCarouselCardItemRoundedCorners = true,
		showCarouselCardItemBorder = true,
		showCarouselCardItemUrl = true,
		showCarouselCardItemBackground = true
	} = attributes;

	const carouselCardItemRoundedCorners = checkAttr('carouselCardItemRoundedCorners', attributes, manifest);
	const carouselCardItemBorder = checkAttr('carouselCardItemBorder', attributes, manifest);
	const carouselCardItemBgColor = checkAttr('carouselCardItemBgColor', attributes, manifest);
	const carouselCardItemUrl = checkAttr('carouselCardItemUrl', attributes, manifest);

	const backgroundColors = getOption('carouselCardItemBgColor', attributes, manifest, true);

	return (
		<>
			{showCarouselCardItemUrl &&
				<LinkEditComponent
					url={carouselCardItemUrl}
					onChange={({ url }) => setAttributes({ [getAttrKey('carouselCardItemUrl', attributes, manifest)]: url })}
					hideOpensInNewTab
				/>
			}

			<Section icon={icons.design} label={__('Design', 'headlines')} showIf={showCarouselCardItemRoundedCorners || showCarouselCardItemBorder || showCarouselCardItemBackground}>
				<div className={classnames('es-h-spaced-wrap', showCarouselCardItemBackground && 'es-mb-2')}>
					<IconToggle
						icon={icons.roundedCorners}
						label={__('Rounded corners', 'headlines')}
						checked={carouselCardItemRoundedCorners}
						onChange={(value) => setAttributes({ [getAttrKey('carouselCardItemRoundedCorners', attributes, manifest)]: value })}
						type='tileButton'
					/>

					<IconToggle
						icon={icons.solidRect}
						label={__('Border', 'headlines')}
						checked={carouselCardItemBorder}
						onChange={(value) => setAttributes({ [getAttrKey('carouselCardItemBorder', attributes, manifest)]: value })}
						type='tileButton'
					/>
				</div>

				{showCarouselCardItemBackground &&
					<ColorPicker
						label={<IconLabel icon={icons.backgroundTypeAlt2} label={__('Background color', 'headlines')} />}
						colors={[{ name: __('None', 'headlines'), slug: undefined, color: 'transparent' }, ...backgroundColors]}
						value={carouselCardItemBgColor}
						onChange={(value) => setAttributes({ [getAttrKey('carouselCardItemBgColor', attributes, manifest)]: value })}
						pickerPopupTitle={__('Background', 'headlines')}
						noBottomSpacing
						groupShades
						canReset
					/>
				}
			</Section>

			<ImageOptions
				{...props('image', attributes)}
				showImageRoundedCorners={false}
				showImageFull={false}
				additionalControlsDesignLayout={false}
				reducedBottomSpacing
			/>

			<ParagraphOptions
				{...props('tag', attributes, {
					options: getOptions(attributes, manifest),
				})}
				label={__('Tag', 'headlines')}
				reducedBottomSpacing
			/>

			<ParagraphOptions
				{...props('description', attributes, {
					options: getOptions(attributes, manifest),
				})}
				label={__('Description', 'headlines')}
				noBottomSpacing
			/>
		</>
	);
};
