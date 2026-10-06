<?php

/**
 * Template for the One Form Component.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);
$oneFormUse = Components::checkAttr('oneFormUse', $attributes, $manifest);
$oneFormFormUse = Components::checkAttr('oneFormFormUse', $attributes, $manifest);

if (!$oneFormUse) {
	return;
}

$componentClass = $manifest['componentClass'] ?? '';
$additionalClass = $attributes['additionalClass'] ?? '';
$blockClass = $attributes['blockClass'] ?? '';
$selectorClass = $attributes['selectorClass'] ?? $componentClass;

$innerBlockContent = $attributes['innerBlockContent'] ?? '';

$unique = Components::getUnique();

$oneFormClass = Components::classnames([
	Components::selector($componentClass, $componentClass),
	Components::selector($blockClass, $blockClass, $selectorClass),
	Components::selector($additionalClass, $additionalClass),
]);

$oneFormContentClass = Components::selector($componentClass, $componentClass, 'content');
$oneFormFormClass = Components::selector($componentClass, $componentClass, 'form');

?>

<div class="<?php echo esc_attr($oneFormClass); ?>" data-id="<?php echo esc_attr($unique); ?>" role="region">
	<?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest); ?>

	<div class="<?php echo esc_attr($oneFormContentClass); ?>">
		<?php
			if ($oneFormFormUse) {
				?>
				<div class="<?php echo esc_attr($oneFormFormClass); ?>">
					<?php
					// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
					echo $innerBlockContent;
					?>
				</div>
				<?php
			}
		?>
	</div>
</div>
