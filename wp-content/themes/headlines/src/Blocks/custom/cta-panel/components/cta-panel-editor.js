import React, { useMemo } from 'react'
import { outputCssVariables, getUnique, props, selector, checkAttr, classnames } from '@eightshift/frontend-libs/scripts';
import { ImageEditor } from '../../../components/image/components/image-editor';
import { HeadingEditor } from '../../../components/heading/components/heading-editor';
import { ParagraphEditor } from '../../../components/paragraph/components/paragraph-editor';
import { ButtonEditor } from '../../../components/button/components/button-editor';
import manifest from './../manifest.json'
import globalManifest from './../../../manifest.json'

export const CtaPanelEditor = ({ attributes, setAttributes }) => {
	const unique = useMemo(() => getUnique(), [])

	const { blockClass } = attributes

	const blockClassInner = classnames([
		selector(blockClass, blockClass, 'inner'),
	]);

	const blockClassContent = classnames([
		selector(blockClass, blockClass, 'content'),
	]);

	return (
		<div className={blockClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<div className={blockClassInner}>
				<div className={blockClassContent}>
					<ImageEditor
						{...props('logo', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
							selectorClass: 'logo',
						})}
					/>

					<HeadingEditor
						{...props('heading', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
						})}
					/>

					<ParagraphEditor
						{...props('paragraph', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
						})}
					/>

					<ButtonEditor
						{...props('button', attributes, {
							blockClass: blockClass,
							setAttributes: setAttributes,
						})}
					/>
				</div>

				<ImageEditor
					{...props('image', attributes, {
						blockClass: blockClass,
						setAttributes: setAttributes,
					})}
				/>
			</div>
			
		</div>
	)
}
