import React, { useMemo } from 'react'
import {
  outputCssVariables,
  getUnique,
  props,
} from '@eightshift/frontend-libs/scripts'
import { InnerBlocks } from '@wordpress/block-editor'
import manifest from '../manifest.json'
import globalManifest from '../../../manifest.json'

export const GridCardsEditor = ({ attributes, setAttributes }) => {
	const unique = useMemo(() => getUnique(), [])

	const { blockClass, gridCardsAllowedBlocks } = attributes

	return (
		<div className={blockClass} data-id={unique}>
			{outputCssVariables(attributes, manifest, unique, globalManifest)}

			<InnerBlocks
				allowedBlocks={gridCardsAllowedBlocks}
			/>
		</div>
	)
}
