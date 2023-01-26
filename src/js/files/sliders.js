import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([Navigation, Pagination, Thumbs]);


/* main slider */
document.addEventListener('DOMContentLoaded', () => {
	const width = window.innerWidth
	if (width <= 768) {

		const slider = new Swiper('.header-bottom-nav', {
			speed: 1500,
			slidesPerView: 'auto',
		});
	}
});

const cardImgSlider = new Swiper('.card-img-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	allowTouchMove: false,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const mainSliderLarge = new Swiper('.large-banner-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',

	navigation: {
		nextEl: '.large-button-next',
		prevEl: '.large-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const weekendSlider = new Swiper('.weekend-slider', {
	clickable: true,
	speed: 1500,
	slidesPerView: 'auto',
	spaceBetween: 20,
	allowTouchMove: false,

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
	allowTouchMove: false,

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
	allowTouchMove: false,

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
	allowTouchMove: false,

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

const productGalery = new Swiper('.product-galery', {
	clickable: true,
	speed: 1500,


	thumbs: {
		swiper: {
			el: '.product-galery-mini',
			slidesPerView: 4,
			spaceBetween: 8,
		},
	},
});

