var btnPopap = document.querySelector('.js-show-popap');
var popap = document.querySelector('.contacts');
var btnClose = document.querySelector('.contacts-close');
var nameField = popap.querySelector('.contacts_name');
var form = popap.querySelector('form');
var pasField = popap.querySelector('.contacts_email');
var textField = popap.querySelector('.contacts_text');
var storage = localStorage.getItem("login");

btnPopap.addEventListener("click", function(){
	event.preventDefault();
	popap.classList.add('contacts-show');
	nameField.focus();

	if (storage) {
		nameField.value = storage;
		pasField.focus();
	}
});

btnClose.addEventListener("click", function() {
	event.preventDefault();
	popap.classList.remove('contacts-show');
	popap.classList.remove('modal-error');
});

window.addEventListener("keydown", function(event) {
	if(event.keyCode === 27) {
		if(popap.classList.contains('contacts-show')) {
			popap.classList.remove('contacts-show');
			popap.classList.remove('modal-error');
		}
	}
});

form.addEventListener("submit", function(){
	if (!nameField.value || !pasField.value || !textField.value) {
		event.preventDefault();
		popap.classList.add("modal-error");
	} else {
		localStorage.setItem("login", nameField.value);
	}
});


$(function(){

	$('.slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
	});

});



// $(document).ready(function(){
//   $('.slider').slick({

//   });
// });