$(document).ready(initAll);

function initAll() {
	$("a").on('click', function(event) {
		event.preventDefault();
	})
}