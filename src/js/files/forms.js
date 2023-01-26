const form = document.forms.search_form;
const formInput = form.search;
const formInputPlaceholder = formInput.placeholder;

// click on input, placeholder -
formInput.addEventListener("focus", function (e) {
	formInput.placeholder = "";
});

// click on body, placeholder +
formInput.addEventListener("blur", function (e) {
	formInput.placeholder = formInputPlaceholder;
});
