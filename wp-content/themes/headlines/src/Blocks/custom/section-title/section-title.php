<?php

/**
 * Template for the Section title Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';

$unique = Components::getUnique();

?>

<div class="<?php echo esc_attr($blockClass); ?>" data-id="<?php echo esc_attr($unique); ?>">
  <?php
    echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);

	// Render the paragraph (intro) component.
    echo Components::render('paragraph', Components::props('intro', $attributes));

    // Render the title component.
    echo Components::render('heading', Components::props('title', $attributes));

    // Render the paragraph (description) component.
    echo Components::render('paragraph', Components::props('description', $attributes));

    ?>
</div>
