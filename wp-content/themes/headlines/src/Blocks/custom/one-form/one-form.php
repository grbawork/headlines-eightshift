<?php

/**
 * Template for the One Form Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

echo Components::render(
	'one-form',
	array_merge(
		Components::props('oneForm', $attributes),
		[
			'innerBlockContent' => $innerBlockContent,
		],
	),
);
