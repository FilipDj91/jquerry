export function getData() {
    $.ajax({
        url: 'https://api.learn.skuflic.com/airports',
        dataType: 'json',
        success: function (data) {
            // Grab the inline template
            const template = $('#template').html();

            // Compile the template
            const compiled_template = Handlebars.compile(template);

            // Render the data into the template
            const rendered = compiled_template({ airport: data });

            // Overwrite the contents of #users with the renderer HTML
            $('#airports').html(rendered);
        }
    });
}