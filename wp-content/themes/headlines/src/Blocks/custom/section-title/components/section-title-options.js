import { __ } from '@wordpress/i18n'
import { PanelBody } from '@wordpress/components'
import {
  Section,
  Select,
  checkAttr,
  getAttrKey,
  getOption,
  props,
  OptionSelector,
} from '@eightshift/frontend-libs/scripts'
import { HeadingOptions as HeadingOptionsComponent } from '../../../components/heading/components/heading-options'
import { ParagraphOptions as ParagraphOptionsComponent } from '../../../components/paragraph/components/paragraph-options'
import manifest from './../manifest.json';

export const SectionTitleOptions = ({ attributes, setAttributes }) => {
	
	const sectionTitleAlign = checkAttr('sectionTitleAlign', attributes, manifest);

	return (
		<PanelBody title={__('Section Title', 'headlines')}>
			<OptionSelector
				value={sectionTitleAlign}
				options={getOption('sectionTitleAlign', attributes, manifest)}
				onChange={(value) => setAttributes({ [getAttrKey('sectionTitleAlign', attributes, manifest)]: value })}
				iconOnly
			/>

			<ParagraphOptionsComponent
				{...props('intro', attributes, { setAttributes })}
				label={__('Intro', 'headlines')}
				reducedBottomSpacing
			/>
			<HeadingOptionsComponent
				{...props('title', attributes, { setAttributes })}
				label={__('Title', 'headlines')}
				reducedBottomSpacing
			/>
			<ParagraphOptionsComponent
				{...props('description', attributes, { setAttributes })}
				label={__('Description', 'headlines')}
				alignment='center'
				reducedBottomSpacing
			/>
		</PanelBody>
	)
}
