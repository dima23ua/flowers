import { Loader, LoaderOptions } from 'google-maps';
// or const {Loader} = require('google-maps'); without typescript

// const options: LoaderOptions = {/* todo */ };
const loader = new Loader('AIzaSyC945RcH445Qc67_zXUmFtXc8ckq0KvLKY');



loader.load().then(function (google) {

	const map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 49.424792731696904, lng: 26.980215911182416 },
		zoom: 17,
	});

	const marker = new google.maps.Marker({
		position: { lat: 49.424792731696904, lng: 26.980215911182416 },
		map: map,
		title: 'магазин "Лавка Роз"',
		icon: 'img/location-map.svg'
	});

	let info = new google.maps.InfoWindow({
		content: '<h2>\"Лавка роз\"</h2><p>Магазин цветов</p>'
	});

	marker.addListener('click', function () {
		info.open(map, marker);
	});

});