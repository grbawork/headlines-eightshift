import React from 'react'
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts'
import { CtaPanelEditor } from './components/cta-panel-editor'
import { CtaPanelOptions } from './components/cta-panel-options'

export const CtaPanel = (props) => (
	<GutenbergBlock 
		{...props}
		editor={CtaPanelEditor}
		options={CtaPanelOptions}
	/>
)
