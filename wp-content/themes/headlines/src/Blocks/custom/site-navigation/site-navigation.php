<?php

/**
 * Template for the Site navigation block.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';
$blockJsClass = $attributes['blockJsClass'] ?? '';

$blockClassInner = Components::classnames([
	Components::selector($blockClass, $blockClass, 'inner'),
]);
$unique = Components::getUnique();


$siteNavigationLinks = Components::checkAttr('siteNavigationLinks', $attributes, $manifest) ?? [];

$siteNavigationButtonsClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'buttons-wrapper'),
]);

if (!empty($siteNavigationLinks)) {
	$siteNavigationLinks = array_filter($siteNavigationLinks, fn ($item) => !empty($item['text']) && !empty($item['url'])); // @phpstan-ignore-line
}

$navbarClass = Components::classnames([
	$blockClass,
	$blockJsClass,
]);

$linksClass = Components::selector($blockClass, $blockClass, 'links');
$linkClass = Components::selector($blockClass, $blockClass, 'link');

$linksToShow = '';

if (!empty($siteNavigationLinks)) {
	foreach ($siteNavigationLinks as $navbarLink) {
		$url = esc_url($navbarLink['url']);
		$text = esc_attr($navbarLink['text']);

		$linksToShow .= "<a class='{$linkClass}' href='{$url}'>{$text}</a>";
	}
}
?>

<nav class="<?php echo esc_attr($navbarClass); ?>" data-id="<?php echo esc_attr($unique); ?>">
	<?php
	echo Components::render('image', Components::props('logo', $attributes, [
		'blockClass' => $blockClass,
		'selectorClass' => 'logo',
	]));
	?>

	<?php if (!empty($linksToShow)) { ?>
	<div class="<?php echo esc_attr($linksClass); ?>">
		<?php
			// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
			echo $linksToShow;
			?>
	</div>
	<?php } ?>

	<div class="<?php echo esc_attr($siteNavigationButtonsClass); ?>">
		<?php
		echo Components::render('button', Components::props('buttonPrimary', $attributes, ['selectorClass' => 'btn-primary'],)),
			Components::render('button', Components::props('buttonSecondary', $attributes, ['selectorClass' => 'btn-secondary'],))
		?>
	</div>

	<?php
	echo Components::render('hamburger', [
		'blockClass' => $blockClass,
	]);
	?>
</nav>

<?php
echo Components::render('drawer', [
	'drawerTrigger' => 'js-hamburger',
	'drawerMenu' => $linksToShow
]);
