<?php

/**
 * Template for the Jumbotron Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$manifest = Components::getManifest(__DIR__);

echo Components::render('jumbotron',[...Components::props('jumbotron', $attributes), 'innerBlockContent'=> $innerBlockContent]);
