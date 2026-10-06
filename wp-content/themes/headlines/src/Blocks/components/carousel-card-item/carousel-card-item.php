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

$carouselCardItemUrl = Components::checkAttr('carouselCardItemUrl', $attributes, $manifest);
$carouselCardItemTagUse = Components::checkAttr('carouselCardItemTagUse', $attributes, $manifest);
$carouselCardItemDescriptionUse = Components::checkAttr('carouselCardItemDescriptionUse', $attributes, $manifest);
$carouselCardItemTag = $carouselCardItemUrl ? 'a' : 'div';

$carouselCardItemClass = Components::classnames([
	Components::selector($componentClass, $componentClass),
	Components::selector($blockClass, $blockClass, $selectorClass),
	Components::selector($additionalClass, $additionalClass),
	Components::selector(!$carouselCardItemTagUse && !$carouselCardItemDescriptionUse, $componentClass, 'full-image'),
	'swiper-slide'
]);

// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped ?>
<<?php echo $carouselCardItemTag; ?>
	class="<?php echo esc_attr($carouselCardItemClass); ?>"
	data-id="<?php echo esc_attr($unique); ?>"
	<?php
	if (!empty($carouselCardItemUrl)) {
		?>
		href="<?php echo esc_url($carouselCardItemUrl); ?>"
		<?php
	}
	?>
>
	<?php
	echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);

	echo Components::render(
		'image',
		Components::props('image', $attributes, [
			'blockClass' => $componentClass
		])
	),

	Components::render(
		'paragraph',
		Components::props('tag', $attributes, [
			'blockClass' => $componentClass,
			'selectorClass' => 'tag',
		])
	),

	Components::render(
		'paragraph',
		Components::props('description', $attributes, [
			'blockClass' => $componentClass,
			'selectorClass' => 'description',
		])
	);

// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped ?>
</<?php echo $carouselCardItemTag; ?>>
