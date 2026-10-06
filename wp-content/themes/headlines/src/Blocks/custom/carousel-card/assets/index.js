import domReady from '@wordpress/dom-ready';
import manifest from '../manifest.json';

domReady(async () => {
	const elements = document.querySelectorAll(`.${manifest.blockJsClass}`);

	if (!elements.length) {
		return;
	}

	const { CarouselCard } = await import('./carousel-card');

	[...elements].forEach((element) => {
		new CarouselCard({
			element,
			blockJsClass: manifest.blockJsClass,
			nextElement: '.swiper-button-next',
			prevElement: '.swiper-button-prev',
		}).init();
	});
});
