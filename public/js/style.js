//set container height to fill the window
$('#p2-homeContainer').css('height', $(window).height());

//get new backgound
$.get('https://pixabay.com/api/videos/?key=5042844-4a24d0bc1db1dad1f577233ff&q=city' )
.done(function(results){
	var video = results.hits[0].videos.large.url;
$('#p2-homeVideo source').attr('src', video);


});
