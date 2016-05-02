 function qS(selector) { return document.querySelector(selector); };

        var extraSuggestions = ['<ul>',
            '<li class="ch-autocomplete-item" data-suggested="Static option">Static option</li>',
            '<li class="ch-autocomplete-item" data-suggested="Other Static option">Other static option</li>',
            '</ul>'].join('');

        function parseResults(results) {
            var data = [];
            if (results[2].suggested_queries !== undefined) {
                results[2].suggested_queries.forEach(function (e, i) {
                    data.push(e.q);
                });

                // Show suggestions
                autocomplete.suggest(data);
            }
        }

        // Zoom
        var zoom1 = new ch.Zoom(qS('#zoom-default'));

        // Preload image
        zoom1.loadImage();

        // Carousel
        var carousel = new ch.Carousel(qS('.myCarousel'), {"pagination": true, "limitPerPage": 6});

        // // Tabs
        //var tabs = new ch.Tabs(qS(".YOUR_SELECTOR_Tabs"));


        // Messages
        var message = (function (message, value) {
        var messages = {
             'option': 'Choose an option.',
             'requiredCheck': 'Accept the Terms of Use.',
             'link': 'Fill in this information. <a href="#double">Chico UI</a>.'
         };

         return function (message, value) {
             var message = messages[message] || message;
             if(value){
                 return message.replace('{#num#}',value)
             }
             return message;
         }
        }());

        tiny.on('a[href="#"]', 'click', function(e) {
            e.preventDefault();
        });
