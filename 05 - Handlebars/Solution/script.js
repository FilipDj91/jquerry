fetch('https://random-data-api.com/api/v2/users?size=15')
	.then(response => response.json())
	.then(data => getData(data));

function getData(data) {
	// Grab the inline template
	const template = document.getElementById('template').innerHTML;

	// Compile the template
	const compiled_template = Handlebars.compile(template);

	// Render the data into the template
	const rendered = compiled_template({ user: data });

	// Overwrite the contents of #users with the renderer HTML
	document.getElementById('users').innerHTML = rendered;
}