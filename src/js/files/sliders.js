import Swiper, { Navigation, Pagination, EffectFade, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Thumbs]);

const slider = new Swiper('.header-bottom-nav', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',

	breakpoints: {
		0: {
			direction: 'vertical',
		},

		768: {
			direction: 'horizontal',
		},
	},
});

const mainSliderLarge = new Swiper('.large-banner-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	direction: 'horizontal',

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const mainSliderSmall = new Swiper('.card-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const mainAppearence = new Swiper('.appearence-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 12,
});

const productSlider = new Swiper('.product-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const directSlider = new Swiper('.direct-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const reviewsSlider = new Swiper('.reviews-slider', {
	clickable: true,
	speed: 2500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const noveltySlider = new Swiper('.novelty-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
