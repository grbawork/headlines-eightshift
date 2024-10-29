<?php

/**
 * Template for the Card Component.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$componentClass = $manifest['componentClass'] ?? '';
$additionalClass = $attributes['additionalClass'] ?? '';
$blockClass = $attributes['blockClass'] ?? '';
$selectorClass = $attributes['selectorClass'] ?? $componentClass;

$unique = Components::getUnique();

$cardClass = Components::classnames([
	Components::selector($componentClass, $componentClass),
	Components::selector($blockClass, $blockClass, $selectorClass),
	Components::selector($additionalClass, $additionalClass),
]);
?>

<div class="<?php echo esc_attr($cardClass); ?>" data-id="<?php echo esc_attr($unique); ?>">
	<?php
	echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest),

	Components::render('heading', Components::props('heading', $attributes, [
		'blockClass' => $componentClass
	])),

	Components::render('paragraph', Components::props('paragraph', $attributes, [
		'blockClass' => $componentClass
	])),

	Components::render('image', Components::props('image', $attributes, [
		'blockClass' => $componentClass,
	]));
	?>
</div>
