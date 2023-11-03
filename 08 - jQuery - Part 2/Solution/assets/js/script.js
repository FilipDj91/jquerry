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

		$("td").on('mouseenter', function () {
			$(this).css("background-color", "yellow");
		});

		// mouseenter(), mouseleave() are deprecated

		// $('table tr td').on('mouseleave', event => {
		// 	console.log(event.currentTarget);
		// 	$(event.currentTarget).removeAttr('style');
		// });

		// Alternative
		// With arrow functions there are no binding of this. In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever. With arrow functions the this keyword always represents the object that defined the arrow function.
		$('td').on('mouseleave', function () {
			$(this).removeAttr('style');
		});

		addStripes();
	}


	$(window).resize(() => {
		console.log($(window).width());
	});

});
