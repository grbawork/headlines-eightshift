import React from 'react';
import { props, classnames, selector, componentClass } from '@eightshift/frontend-libs/scripts';
import { JumbotronEditor as JumbotronEditorComponent } from '../../../components/jumbotron/components/jumbotron-editor';

export const JumbotronEditor = ({ attributes, setAttributes }) => {


	const contentClass = classnames([
		selector(componentClass, componentClass, 'content'),
	]);

	return (
		<div className={contentClass}>
			<JumbotronEditorComponent
				{...props('jumbotron', attributes, {
					setAttributes,
				})}
			/>
		</div>
	);
};
