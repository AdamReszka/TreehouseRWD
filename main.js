$(document).ready(initAll);

function initAll() {
	$("a").on('click', function(event) {
		event.preventDefault();
	});
	$("#hamburger").on('click', function(event){
		event.preventDefault();
		if ($(this).closest('.main-container').find('#burger-ul').hasClass('open')) {
			$(this).closest('.main-container').find('#burger-ul').removeClass('open').slideUp();
		} else {
			$(this).closest('.main-container').find('#burger-ul').addClass('open').slideDown();
		}
		
	});
}