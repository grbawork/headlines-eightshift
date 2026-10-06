import React from 'react'
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';
import { SectionTitleEditor } from './components/section-title-editor'
import { SectionTitleOptions } from './components/section-title-options'


export const SectionTitle = (props) => (
	<GutenbergBlock 
		{...props}
		options = {SectionTitleOptions}
		editor = {SectionTitleEditor}
	/>
)
