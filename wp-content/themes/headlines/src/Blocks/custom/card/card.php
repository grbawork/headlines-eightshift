<?php

/**
 * Template for the Card Block.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

echo Components::render('card', Components::props('card', $attributes));
