$(document).ready(function() {

    if(window.location.href.indexOf('index') > -1 ) {
        // Slider
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
        });
    

        // post
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format('dddd') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum ligula, nec imperdiet augue. 
                        Ut tincidunt, ex in sollicitudin faucibus, nulla augue dignissim urna, vitae lacinia elit nibh ut arcu. 
                        Vivamus rutrum nisl erat, eget tristique dui tincidunt nec. Nunc placerat faucibus nisi, maximus posuere nibh dignissim at. 
                        Sed sagittis diam vel est bibendum condimentum. Praesent mollis fermentum dictum. 
                        Integer at elit ac orci tempor interdum. Vivamus id condimentum odio. Proin fringilla nec massa et tristique.`
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format('dddd') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum ligula, nec imperdiet augue. 
                        Ut tincidunt, ex in sollicitudin faucibus, nulla augue dignissim urna, vitae lacinia elit nibh ut arcu. 
                        Vivamus rutrum nisl erat, eget tristique dui tincidunt nec. Nunc placerat faucibus nisi, maximus posuere nibh dignissim at. 
                        Sed sagittis diam vel est bibendum condimentum. Praesent mollis fermentum dictum. 
                        Integer at elit ac orci tempor interdum. Vivamus id condimentum odio. Proin fringilla nec massa et tristique.`
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format('dddd') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum ligula, nec imperdiet augue. 
                        Ut tincidunt, ex in sollicitudin faucibus, nulla augue dignissim urna, vitae lacinia elit nibh ut arcu. 
                        Vivamus rutrum nisl erat, eget tristique dui tincidunt nec. Nunc placerat faucibus nisi, maximus posuere nibh dignissim at. 
                        Sed sagittis diam vel est bibendum condimentum. Praesent mollis fermentum dictum. 
                        Integer at elit ac orci tempor interdum. Vivamus id condimentum odio. Proin fringilla nec massa et tristique.`
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().format('dddd') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed dictum ligula, nec imperdiet augue. 
                        Ut tincidunt, ex in sollicitudin faucibus, nulla augue dignissim urna, vitae lacinia elit nibh ut arcu. 
                        Vivamus rutrum nisl erat, eget tristique dui tincidunt nec. Nunc placerat faucibus nisi, maximus posuere nibh dignissim at. 
                        Sed sagittis diam vel est bibendum condimentum. Praesent mollis fermentum dictum. 
                        Integer at elit ac orci tempor interdum. Vivamus id condimentum odio. Proin fringilla nec massa et tristique.`
            }
        ]

        posts.forEach((element, index) => {
            var post = `
                <article class="post">
                    <h2>${element.title}</h2>
                    <span class="date">${element.date}</span>
                    <p>${element.content}</p>
                    <a href="#" class="btn-more">Read more</a>
                </article>
            `
            $("#posts").append(post);
        });
    }

    // selector de temas
    var theme = $('#theme');

    var current_theme = localStorage.getItem("theme");
    
    theme.attr("href", current_theme);

    $('#to-green').click(function() {
        theme.attr("href", "css/green.css");
        localStorage.clear();
        current_theme = localStorage.setItem("theme", theme.attr("href"));
    });
    
    $('#to-red').click(function() {
        theme.attr("href", "css/red.css");
        localStorage.clear();
        current_theme = localStorage.setItem("theme", theme.attr("href"));
    });
    
    $('#to-blue').click(function() {
        theme.attr("href", "css/blue.css");
        localStorage.clear();
        current_theme = localStorage.setItem("theme", theme.attr("href"));
    });

    // scroll arriba de la web
    $('.up').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });


    //login false

    $('#login form').submit(function() {
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);

    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != 'undefined') {

        var about_parrafo = $('#about p');

        about_parrafo.html("<br /><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id='logout' >Log out</a>");

        $('#login').hide();

        $('#logout').click(function() {
            localStorage.removeItem("form_name");
            location.reload(); /* screen update */
        });
    }
    // Acordeon
    if(window.location.href.indexOf('about') > -1 ) {
        $('#acordeon').accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1 ) {
        var reloj = moment().format('h:mm:ss a');
        $('#reloj').html(reloj);
        setInterval(function() {
            var reloj = moment().format('h:mm:ss a');
            $('#reloj').html(reloj);
        }, 1000);
    }


    if(window.location.href.indexOf('contacto') > -1 ) {

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }
});