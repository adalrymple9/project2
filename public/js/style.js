//set container height to fill the window
$('#p2-homeContainer').css('height', $(window).height());

//get new backgound
$.get('https://pixabay.com/api/?key=5042844-4a24d0bc1db1dad1f577233ff&q=travel')
    .done(function(results) {
        console.log(results.hits[0].webformatURL);
        var image = results.hits[9].webformatURL;
        $('#p2-homeContainer').css('background-image', 'url(' + image + ')');
        //	var video = results.hits[0].videos.large.url;
        //	$('#p2-homeVideo').attr('autoplay');
        //$('#p2-homeVideo source').attr('src', video);
        //

    });
