let unheaderButton = document.querySelector('.unheader__close');
const unheader = document.querySelector('.unheader');

if (unheaderButton) {
	unheaderButton.addEventListener('click', function (e) {

		unheader.classList.add('close');
	})
}

let blogBtn = document.querySelector('.blog-button');
let btnText = document.querySelector('.blog-button__text');
let blogContent = document.querySelector('.blog-grid');
let blogLenghts = document.querySelectorAll('.blog').length;
let items = 6;

if (blogBtn) {
	blogBtn.addEventListener('click', function (e) {

		blogBtn.classList.add('is-active');

		items += 3;

		const array = Array.from(document.querySelector('.blog-grid').children);
		const visItems = array.slice(0, items);

		visItems.forEach(el => el.classList.add('visible'));

		if (visItems.length === blogLenghts) {
			blogBtn.style.display = 'none';
		}
	})
}
