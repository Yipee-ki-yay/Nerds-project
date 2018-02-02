const btnPopap = document.querySelector('.js-show-popap');
const popap = document.querySelector('.contacts');
const btnClose = document.querySelector('.contacts-close');
const nameField = popap.querySelector('.contacts_name');
const form = popap.querySelector('form');
const pasField = popap.querySelector('.contacts_email');
const textField = popap.querySelector('.contacts_text');
const storage = localStorage.getItem("login");
const overlay = document.querySelector('.contacts-overlay');

const shopItemsContainer = document.querySelector('.catalog-items');
const shopItems = document.querySelectorAll('.catalog-item');
const shopItemHover = document.querySelectorAll('.catalog-item-info');



btnPopap.addEventListener("click", function(){
	event.preventDefault();
	popap.classList.add('contacts-show');
	overlay.classList.add('show');
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
	overlay.classList.remove('show');
});

overlay.addEventListener("click", function (){
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

form.addEventListener("submit", function(){
	if (!nameField.value || !pasField.value || !textField.value) {
		event.preventDefault();
		popap.classList.add("modal-error");
	} else {
		localStorage.setItem("login", nameField.value);
	}
});

//====================================================================== catalog-item hover effect begin

// document.onmouseover = function (event) {
// 	let target = event.target;
// 	console.log(event.target);	
// 	if (target.className == "catalog-item-head" || target.className == "catalog-item-image") {
// 		let hideItem = target.parentElement.getElementsByClassName('catalog-item-info');
// 		hideItem[0].classList.add('show');
// 	}	 
	// else if (target.className != "catalog-item-head" || target.className != "catalog-item-image" || target.className != "catalog-item-info") {
	// 	for (let i = 0; i < shopItemHover.length; i++) {
	// 		shopItemHover[i].classList.remove('show');
	// 	}
	// }
//}

// shopItems.addEventListener("mouseover", function(){
// 	shopItemHover.classList.add('show');
// });
// shopItem.addEventListener("mouseout", function(){
// 	shopItemHover.classList.remove('show');
// });

//====================================================================== catalog-item hover effect begin

//====================== Slider BEGIN

$(function(){

	$('.slider').slick({
		infinite: true,
		dots: true,
		arrows: false,
	});

//====================== Slider END

});
