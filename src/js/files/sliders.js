import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

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