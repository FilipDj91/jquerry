$(document).ready(function () {
	$(document).ready(function () {
		$.ajax({
			url: 'https://api.learn.skuflic.com/users',
			dataType: 'json',
			success: function (data) {
				const template = $('#template').html();
				const compiled_template = Handlebars.compile(template);
				const rendered = compiled_template({ user: data });
				$('#users').html(rendered);
				addStripes();
				afterRender();
			},
		});
	});

	function addStripes() {
		$('table tr:nth-child(even)').addClass('striped');
	}

	function afterRender() {
		$('[data-toggle="popover"]').popover();
		$('table th').css('color', 'darkBlue');
	}
});