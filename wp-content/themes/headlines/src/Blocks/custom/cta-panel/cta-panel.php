<?php

/**
 * Template for the Cta panel Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';

$unique = Components::getUnique();

$blockClassInner = Components::classnames([
	Components::selector($blockClass, $blockClass, 'inner'),
]);

$blockClassContent = Components::classnames([
	Components::selector($blockClass, $blockClass, 'content'),
]);

?>

<div class="<?php echo esc_attr($blockClass); ?>" data-id="<?php echo esc_attr($unique); ?>">
	<?php echo Components::outputCssVariables($attributes, $manifest, $unique, $globalManifest);	?>

	<div class="<?php echo esc_attr($blockClassInner); ?>">
		<div class="<?php echo esc_attr($blockClassContent); ?>">
			<?php 
				echo Components::render('image', Components::props('logo', $attributes, [
					'selectorClass' => 'logo',
				]));
				echo Components::render('heading', Components::props('heading', $attributes));
				echo Components::render('paragraph', Components::props('paragraph', $attributes));
				echo Components::render('button', Components::props('button', $attributes));
			?>
		</div>

		<?php 
			echo Components::render('image', Components::props('image', $attributes));
		?>
	</div>
</div>
