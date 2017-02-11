$(document).ready(initAll);

function initAll() {
	$("a").on('click', function(event) {
		event.preventDefault();
	});
	$("#hamburger").on('click', function(event){
		event.preventDefault();
		alert('udao sie');
	});
}