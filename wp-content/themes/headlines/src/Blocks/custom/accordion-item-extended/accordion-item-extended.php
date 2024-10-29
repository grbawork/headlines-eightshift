<?php

/**
 * Template for the Accordion Block view.
 *
 * @package Headlines
 */

use HeadlinesVendor\EightshiftLibs\Helpers\Components;

$globalManifest = Components::getManifest(dirname(__DIR__, 2));
$manifest = Components::getManifest(__DIR__);

$blockClass = $attributes['blockClass'] ?? '';
$blockJsClass = $attributes['blockJsClass'] ?? '';

$uniqueAccordionId = Components::getUnique();
$uniqueAccordionTriggerId = Components::getUnique();

$accordionItemExtendedIconClass = Components::selector($blockClass, $blockClass, 'icon');
$accordionItemExtendedContentClass = Components::selector($blockClass, $blockClass, 'content');

$accordionItemExtendedTriggerClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'trigger'),
	"{$blockJsClass}-trigger",
]);

$accordionItemExtendedPanelClass = Components::classnames([
	Components::selector($blockClass, $blockClass, 'panel'),
	"{$blockJsClass}-panel",
]);

$accordionItemExtendedStartOpen = Components::checkAttr('accordionItemExtendedStartOpen', $attributes, $manifest);
$accordionItemExtendedTriggerContent = Components::checkAttr('accordionItemExtendedTriggerContent', $attributes, $manifest);

$accordionItemExtendedClass = Components::classnames([
	$blockClass,
	$blockJsClass,
]);
?>

<div
	class="<?php echo esc_attr($accordionItemExtendedClass); ?>"
	data-open="<?php echo esc_attr($accordionItemExtendedStartOpen ? 'true' : 'false'); ?>"
>
	<button
		class="<?php echo esc_attr($accordionItemExtendedTriggerClass); ?>"
		aria-label="<?php echo esc_html($accordionItemExtendedTriggerContent); ?>"
		aria-controls="<?php echo esc_attr($uniqueAccordionId); ?>"
		aria-expanded="<?php echo esc_attr($accordionItemExtendedStartOpen ? 'true' : 'false'); ?>"
		id="<?php echo esc_attr($uniqueAccordionTriggerId); ?>"
	>
		<?php echo Components::render('paragraph', Components::props('trigger', $attributes)); ?>

		<span class="<?php echo esc_attr($accordionItemExtendedIconClass); ?>" aria-hidden="true" >
			<?php
			// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
			echo $manifest['resources']['icon'];
			?>
		</span>
	</button>

	<div
		role="region"
		class="<?php echo esc_attr($accordionItemExtendedPanelClass); ?>"
		aria-hidden="<?php echo esc_attr($accordionItemExtendedStartOpen ? 'false' : 'true'); ?>"
		aria-labelledby="<?php echo esc_attr($uniqueAccordionTriggerId); ?>"
		id="<?php echo esc_attr($uniqueAccordionId); ?>"
	>
		<div class="<?php echo esc_attr($accordionItemExtendedContentClass); ?>">
			<?php
				// phpcs:ignore Eightshift.Security.ComponentsEscape.OutputNotEscaped
				echo Components::render('paragraph', Components::props('description', $attributes)),
				Components::render('image', Components::props('image', $attributes));
			?>
		</div>
	</div>
</div>
