let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
let container = document.getElementsByClassName('container');

burger.addEventListener('click', function(e){

	container[0].classList.toggle('is-open');
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});

let clickEvent = new Event('click');

