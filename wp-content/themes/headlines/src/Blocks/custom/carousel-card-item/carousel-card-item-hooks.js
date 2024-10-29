import { addFilter } from '@wordpress/hooks';
import _ from 'lodash';
import classnames from 'classnames';
import { createHigherOrderComponent } from '@wordpress/compose';
import globalManifest from '../../manifest.json';
import manifest from './manifest.json';

const { namespace } = globalManifest;

// Add options to the Gutenberg markup.
const parentComponentBlock = createHigherOrderComponent((BlockListBlock) => {
	return (innerProps) => {
		const {
			name,
			clientId,
			attributes: {
				blockClass,
			},
		} = innerProps;

		let updatedProps = innerProps;

		if (name === `${namespace}/${manifest.blockName}`) {
			const componentClass = classnames([
				blockClass,
				globalManifest.globalVariables.customBlocksName,
			]);
			updatedProps = _.assign(
				{},
				innerProps,
				{
					className: componentClass,
				},
			);
		}

		return (
			<BlockListBlock {...updatedProps} wrapperProps={{'data-id': clientId }} />
		);
	};
}, 'parentComponentBlock');

export const hooks = () => {
	addFilter('editor.BlockListBlock', namespace, parentComponentBlock);
};
