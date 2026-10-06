import Swiper from 'swiper';
import { Keyboard, Navigation, Grid } from 'swiper/modules';
import globalManifest from '../../../manifest.json';

export class CarouselCard {
	constructor(options) {
		this.element = options.element;
		this.blockJsClass = options.blockJsClass;
		this.nextElement = options.nextElement;
		this.prevElement = options.prevElement;
		this.swiperElementClass = `.${this.blockJsClass}-swiper`;
		this.swiperWrapperClass = '.swiper-wrapper';
		this.swiperChildClass = '.swiper-slide';
	}

	init() {
		const swiperElement = this.element.querySelector(this.swiperElementClass);
		const swiperWrapper = this.element.querySelector(this.swiperWrapperClass);
		const swiperChilds = swiperWrapper.querySelectorAll(this.swiperChildClass);

		let slidesPerView = 2.5;
		if (swiperChilds.length < 6) {
			slidesPerView = swiperChilds.length;
		}

		const { breakpoints } = globalManifest.globalVariables;

		const allowDrag = swiperElement.getAttribute('data-allow-drag');
		const allowKeyboardControls = swiperElement.getAttribute('data-allow-keyboard-controls');

		new Swiper(swiperElement, {
			slidesPerView: 2,
			spaceBetween: 10,
			navigation: {
				nextEl: this.nextElement,
				prevEl: this.prevElement,
			},
			allowTouchMove: allowDrag,
			keyboard: {
				enabled: allowKeyboardControls,
			},
			modules: [
				Keyboard,
				Navigation,
				Grid
			],
			grid: {
				fill: 'row',
				rows: 1,
			},
			breakpointsInverse: false,
			breakpoints: {
				[breakpoints.mobile]: {
					grid: {
						fill: 'column',
						rows: 1,
					},
					slidesPerView: slidesPerView-1.5,
					spaceBetween: 15,
				},
				[breakpoints.tablet]: {
					grid: {
						fill: 'column',
						rows: 1,
					},
					slidesPerView: slidesPerView-1,
					spaceBetween: 15
				},
				[breakpoints.desktop]: {
					grid: {
						fill: 'column',
						rows: 1,
					},
					slidesPerView: slidesPerView,
					spaceBetween: 25
				},
				[breakpoints.large]: {
					grid: {
						fill: 'column',
						rows: 1,
					},
					slidesPerView: slidesPerView+1,
					spaceBetween: 25
				}
			}
		});
	}
}
