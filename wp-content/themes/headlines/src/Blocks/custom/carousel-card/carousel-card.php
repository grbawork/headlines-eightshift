<?php

/**
 * Template for the Example Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';
$blockJsClass = $attributes['blockJsClass'] ?? '';

$carouselCardClass = Components::classnames([
	$blockClass,
	$blockJsClass,
]);

$carouselCardAllowDrag = Components::checkAttr('carouselCardAllowDrag', $attributes, $manifest);
$carouselCardAllowKeyboardControls = Components::checkAttr('carouselCardAllowKeyboardControls', $attributes, $manifest);


$carouselCardSliderClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'carousel-slider'),
]);

$carouselCardItemsClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'carousel-items'),
	"{$blockJsClass}-swiper",
	'swiper'
]);

$carouselCardItemsWrapperClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'carousel-items-wrapper'),
	'swiper-wrapper'
]);

$carouselCardIconsClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'carousel-icons'),
]);


$unique = Components::getUnique();
echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);
?>

<div data-id="<?php echo esc_attr($unique); ?>" class="<?php echo esc_attr($carouselCardClass); ?>">
	<?php
		echo Components::render('heading', Components::props('heading', $attributes, ['blockClass' => $blockClass]));
	?>

	<div class="<?php echo esc_attr($carouselCardSliderClass); ?>" >
		<div class="<?php echo esc_attr($carouselCardIconsClass); ?>">
			<?php
			echo Components::render('icon',Components::props('iconLeft', $attributes, [
					'blockClass' => $blockClass,
					'additionalClass' => 'swiper-button-prev',
				])
			),

			Components::render('icon', Components::props('iconRight', $attributes, [
					'blockClass' => $blockClass,
					'additionalClass' => 'swiper-button-next',
				])
			);
			?>
		</div>
		<div class="<?php echo esc_attr($carouselCardItemsClass); ?>"
			data-allow-drag="<?php echo esc_attr($carouselCardAllowDrag); ?>"
			data-allow-keyboard-controls="<?php echo esc_attr($carouselCardAllowKeyboardControls); ?>"
		>
			<div class="<?php echo esc_attr($carouselCardItemsWrapperClass); ?>">
				<?php
				// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
				echo $innerBlockContent;
				?>
			</div>
		</div>
	</div>
</div>
