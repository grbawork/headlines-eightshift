import { __ } from '@wordpress/i18n'
import { PanelBody } from '@wordpress/components'
import { props, checkAttr, IconToggle, icons, getAttrKey } from '@eightshift/frontend-libs/scripts'
import { ImageOptions } from '../../../components/image/components/image-options'
import { ParagraphOptions as ParagraphOptionsComponent } from '../../../components/paragraph/components/paragraph-options'
import manifest from '../manifest.json'


export const AccordionItemExtendedOptions = ({ attributes, setAttributes }) => {
	const accordionItemExtendedStartOpen = checkAttr('accordionItemExtendedStartOpen', attributes, manifest);

	return (
    <PanelBody title={__('Accordion Item Extended', 'headlines')}>
		<IconToggle
			icon={icons.dropdownClose}
			label={__('Expanded', 'headlines')}
			checked={accordionItemExtendedStartOpen}
			onChange={(value) => setAttributes({ [getAttrKey('accordionItemExtendedStartOpen', attributes, manifest)]: value })}
		/>
		<ImageOptions
			{...props('image', attributes, { setAttributes })}
			showImageUse
			showLabel
			reducedBottomSpacing
		/>
		<ParagraphOptionsComponent
			{...props('description', attributes, { setAttributes })}
			label={__('Description', 'headlines')}
			reducedBottomSpacing
		/>
    </PanelBody>
  )
}
