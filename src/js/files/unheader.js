let unheaderButton = document.querySelector('.unheader__close');
const unheader = document.querySelector('.unheader');

if (unheaderButton) {
	unheaderButton.addEventListener('click', function (e) {

		unheader.classList.add('close');
	})
}