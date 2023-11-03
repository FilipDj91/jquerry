$(document).ready(function () {
	$.ajax({
		url: 'https://api.learn.skuflic.com/users',
		dataType: 'json',
		success: function (data) {
			const template = document.getElementById('template').innerHTML;
			const compiled_template = Handlebars.compile(template);
			const rendered = compiled_template({ user: data, tableClass: 'table' });
			document.getElementById('users').innerHTML = rendered;
		},
	});
});
