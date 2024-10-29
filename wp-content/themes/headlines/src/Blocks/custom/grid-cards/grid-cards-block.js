import React from 'react'
import { GridCardsEditor } from './components/grid-cards-editor'
import { GridCardsOptions } from './components/grid-cards-options'
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts'

export const GridCards = (props) => (
	<GutenbergBlock
		{...props}
		
		editor={GridCardsEditor}
		options={GridCardsOptions}
	/>
)
