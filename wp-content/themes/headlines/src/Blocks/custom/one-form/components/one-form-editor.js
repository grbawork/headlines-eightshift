import React from 'react';
import { props } from '@eightshift/frontend-libs/scripts';
import { OneFormEditor as OneFormEditorComponent } from '../../../components/one-form/components/one-form-editor';

export const OneFormEditor = ({ attributes, setAttributes }) => {
	return (
		<OneFormEditorComponent
			{...props('oneForm', attributes, {
				setAttributes,
			})}
		/>
	);
};
