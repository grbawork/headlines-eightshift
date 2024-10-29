<?php

/**
 * Display footer.
 *
 * @package Headlines
 */

use Headlines\AdminMenus\ReusableBlocksHeaderFooter;

?>

</main>

<?php
$footerPartialId = get_option(ReusableBlocksHeaderFooter::FOOTER_PARTIAL) ?? '';
ReusableBlocksHeaderFooter::renderPartial($footerPartialId);

wp_footer();
?>
</body>
</html>
