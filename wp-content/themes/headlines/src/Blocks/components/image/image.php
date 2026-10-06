<?php

/**
 * Template for the Image Component.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$imageUse = Components::checkAttr('imageUse', $attributes, $manifest) ?? false;
$imageUrl = Components::checkAttrResponsive('imageUrl', $attributes, $manifest);

if (!$imageUse || !isset($imageUrl['large']) || empty($imageUrl['large'])) {
	return;
}

$unique = Components::getUnique();

$componentClass = $manifest['componentClass'] ?? '';
$additionalClass = $attributes['additionalClass'] ?? '';
$blockClass = $attributes['blockClass'] ?? '';
$selectorClass = $attributes['selectorClass'] ?? $componentClass;

$imageAlt = Components::checkAttr('imageAlt', $attributes, $manifest) ?? '';

$pictureClass = Components::classnames([
	Components::selector($componentClass, $componentClass),
	Components::selector($blockClass, $blockClass, $selectorClass),
	Components::selector($additionalClass, $additionalClass),
]);

$imgClass = Components::classnames([
	Components::selector($componentClass, $componentClass, 'img'),
	Components::selector($blockClass, $blockClass, "{$selectorClass}-img"),
]);

$imageLink = Components::checkAttr('imageLink', $attributes, $manifest);
$imageLinkIsNewTab = Components::checkAttr('imageLinkIsNewTab', $attributes, $manifest);

$imageLinkClass = Components::classnames([
	Components::selector($componentClass, 'href'),
	Components::selector($blockClass, $blockClass, "href"),
	Components::selector($selectorClass, $blockClass, "{$selectorClass}-href"),
]);

?>

<?php if (!empty($imageLink)) { ?>
	<a class="<?php echo esc_attr($imageLinkClass); ?>" href="<?php echo esc_attr($imageLink); ?>"
	target="<?php echo $imageLinkIsNewTab ? '_blank' : '_self'; ?>">
<?php } ?>


	<picture class="<?php echo esc_attr($pictureClass); ?>" data-id="<?php echo esc_attr($unique); ?>">

		<?php
		echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);
		?>

		<?php foreach (array_reverse($imageUrl) as $breakpoint => $item) { ?>
		<?php
			if ($breakpoint === 'large') {
				continue;
			}
			if (!$item) {
				continue;
			}

			$breakpointValue = $globalManifest['globalVariables']['breakpoints'][$breakpoint] ?? ''; // @phpstan-ignore-line
		
			if (!$breakpointValue) {
				continue;
			}

			// phpcs:ignore Eightshift.Security.EscapeOutput.OutputNotEscaped
			echo '<source srcset="' . esc_url($item) . '" media="(max-width: ' . esc_attr($breakpointValue) . 'px)" />';
			?>
		<?php } ?>

		<img src="<?php echo esc_url($imageUrl['large']); ?>" alt="<?php echo esc_attr($imageAlt); ?>"
			class="<?php echo esc_attr($imgClass); ?>" />
	</picture>

<?php if (!empty($imageLink)) { ?>
	</a>
<?php }
