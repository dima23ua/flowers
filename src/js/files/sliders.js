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
		nextEl: '.large-button-next',
		prevEl: '.large-button-prev',
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
		nextEl: '.weekend-button-next',
		prevEl: '.weekend-button-prev',
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
		nextEl: '.product-button-next',
		prevEl: '.product-button-prev',
	},
});

const bestSlider = new Swiper('.best-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.best-button-next',
		prevEl: '.best-button-prev',
	},
});

const newsSlider = new Swiper('.news-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.news-button-next',
		prevEl: '.news-button-prev',
	},
});

const directSlider = new Swiper('.direct-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.direct-button-next',
		prevEl: '.direct-button-prev',
	},
});

const galerySlider = new Swiper('.galery-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.galery-button-next',
		prevEl: '.galery-button-prev',
	},
});

const reviewsSlider = new Swiper('.reviews-slider', {
	clickable: true,
	speed: 2500,
	// slidesPerView: 'auto',
	spaceBetween: 20,

	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
});

const noveltySlider = new Swiper('.novelty-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,
});
