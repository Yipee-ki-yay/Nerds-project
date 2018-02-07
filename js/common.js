const btnPopap = document.querySelector('.js-show-popap');
const popap = document.querySelector('.contacts');
const btnClose = document.querySelector('.contacts-close');
const nameField = popap.querySelector('.contacts_name');
const form = popap.querySelector('form');
const pasField = popap.querySelector('.contacts_email');
const textField = popap.querySelector('.contacts_text');
const storage = localStorage.getItem("login");
const overlay = document.querySelector('.contacts-overlay');


btnPopap.addEventListener("click", function(event){
	event.preventDefault();
	popap.classList.add('contacts-show');
	overlay.classList.add('show');
	nameField.focus();

	if (storage) {
		nameField.value = storage;
		pasField.focus();
	}
});

btnClose.addEventListener("click", function(event) {
	event.preventDefault();
	popap.classList.remove('contacts-show');
	popap.classList.remove('modal-error');
	overlay.classList.remove('show');
});

overlay.addEventListener("click", function (event){
	popap.classList.remove('contacts-show');
	popap.classList.remove('modal-error');
	overlay.classList.remove('show');
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(popap.classList.contains('contacts-show')) {
			popap.classList.remove('contacts-show');
			popap.classList.remove('modal-error');
			overlay.classList.remove('show');
		}
	}
});

form.addEventListener("submit", function(event){
	if (!nameField.value || !pasField.value || !textField.value) {
		event.preventDefault();
		popap.classList.add("modal-error");
	} else {
		localStorage.setItem("login", nameField.value);
	}
});


//====================== Slider BEGIN

$(function(){
	$('.slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
	});
});

//====================== Slider END
