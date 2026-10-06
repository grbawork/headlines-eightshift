import React from 'react';
import { CardEditor } from './components/card-editor';
import { CardOptions } from './components/card-options';
import { GutenbergBlock } from '@eightshift/frontend-libs/scripts';

export const Card = (props) => (
	<GutenbergBlock
		{...props}
		editor={CardEditor}
		options={CardOptions}
	/>
);
