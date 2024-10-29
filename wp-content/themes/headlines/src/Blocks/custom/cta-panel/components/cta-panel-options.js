import { __ } from '@wordpress/i18n'
import { PanelBody } from '@wordpress/components'
import { props, getOptions, Collapsable, icons } from '@eightshift/frontend-libs/scripts'
import { ImageOptions } from '../../../components/image/components/image-options'
import { HeadingOptions } from '../../../components/heading/components/heading-options'
import { ParagraphOptions } from '../../../components/paragraph/components/paragraph-options'
import { ButtonOptions } from '../../../components/button/components/button-options'
import manifest from '../manifest.json'


export const CtaPanelOptions = ({ attributes, setAttributes }) => {

	return (
		<PanelBody title={__('CTA Panel', 'headlines')}>
			<Collapsable label={__('Main Image', 'projecteight')} icon={icons.image}>
				<ImageOptions 
					{...props('image', attributes, { setAttributes })}
					showImageUse
					showLabel
					reducedBottomSpacing
				/>
			</Collapsable>
			<ImageOptions 
				{...props('logo', attributes, { setAttributes })}
				label={__('Logo', 'headlines')}
				showImageUse
				showLabel
				reducedBottomSpacing
			/>
			<HeadingOptions
				{...props('heading', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest),
				})}
				reducedBottomSpacing
			/>

			<ParagraphOptions
				{...props('paragraph', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest),
				})}
				reducedBottomSpacing
			/>

			<ButtonOptions
				{...props('button', attributes, {
					setAttributes,
					options: getOptions(attributes, manifest),
				})}
				noBottomSpacing
			/>
		</PanelBody>
	)
}
