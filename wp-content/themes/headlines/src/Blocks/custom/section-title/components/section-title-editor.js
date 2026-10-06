import React, { useMemo } from 'react'
import {
  outputCssVariables,
  getUnique,
  props,
} from '@eightshift/frontend-libs/scripts'
import { HeadingEditor as HeadingEditorComponent } from '../../../components/heading/components/heading-editor'
import { ParagraphEditor as ParagraphEditorComponent } from '../../../components/paragraph/components/paragraph-editor'
import manifest from './../manifest.json'
import globalManifest from './../../../manifest.json'

export const SectionTitleEditor = ({ attributes, setAttributes }) => {
	const unique = useMemo(() => getUnique(), [])

	const { blockClass } = attributes

	return (
		<div className={blockClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<ParagraphEditorComponent
				{...props('intro', attributes, {
					setAttributes,
					selectorClass: 'intro',
				})}
			/>

			<HeadingEditorComponent
				{...props('title', attributes, {
					setAttributes,
				})}
			/>

			<ParagraphEditorComponent
				{...props('description', attributes, {
					setAttributes,
				})}
			/>
		</div>
	)
}
