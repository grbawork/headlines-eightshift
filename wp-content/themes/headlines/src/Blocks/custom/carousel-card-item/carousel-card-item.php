<?php

/**
 * Template for the Card Metric Hero Block.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

echo Components::render(
	'carousel-card-item',
	Components::props('carouselCardItem', $attributes)
);
