<?php

/**
 * Template for the Grid Cards Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';
$blockClassInner = Components::classnames([
  Components::selector($blockClass, $blockClass, 'inner'),
]);
$unique = Components::getUnique();
?>

<div class="<?php echo esc_attr($blockClass); ?>" data-id="<?php echo esc_attr($unique); ?>">
	<?php
		echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);
	?>

	<div class="<?php echo esc_attr($blockClassInner);?>">
		<?php echo $innerBlockContent; ?>
	</div>
</div>
