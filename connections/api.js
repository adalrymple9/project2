// Load the full build. 
var _ = require('lodash');
// Load the core build. 
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods. 
var fp = require('lodash/fp');

var request = require('request');


// Load method categories. 
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles. 
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');

var photoUrl;

$.post('api/trip', function(req, res) {
    //getting the request data to get city info from front-end
    var city;
    // var category;
    var data = {
        near: city,
        radius: '10000',
        limit: '100',
        client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
        client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
    }

    //foursquare api call
    request('https://api.foursquare.com/v2/venues/search?v=20161016?near=' + data.near + "?radius=" + data.radius, +"?client_id=" + data.client_id + "?client_secret=" + data.client_secret, function(error, response, body) {
        var venuesObj = body.json().response.venues;
        for (var i = 0; i < venuesObj.length; i++) {
            var venuesObj = response.response.venues[i].id;
            getPhotos();

            //get correct var names from forsquare API 
            //create vars for: image of the place, name, catagory and location
            var venue = {
                image: photoUrl,
                name: venuesObj[i].name,
                cat: venuesObj[i].categories[0].name,
                loc: venuesObj[i].location.formattedAddress
            }
            venueData.push(venue);
        }
    });
    var venueData = [];

    //need a for loop to loop through response 

    var venues = {
        Venue: venueData,
        layout: false
    }

    //get correct partial render
    res.render("partials/venues", venues);
});


//get photo for venue
function getPhotos() {
    $.ajax({
        url: 'https://api.foursquare.com/v2/venues/' + venueId + '/photos?v=20170404',
        medthod: 'GET',
        data: {
            client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
            client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
        },
        async: false
    }).done(function(response) {
        if (response.response.photos.items.length === 0) {
            photoUrl = 'http://placehold.it/500x500';
        } else {

            var pre = response.response.photos.items[0].prefix;
            var suf = response.response.photos.items[0].suffix;
            var size = '500x500';
            photoUrl = pre + size + suf;

        }

        console.log(photoUrl);
    });

}

function populateResults(response) {
    var venuesObj = response.response.venues;
    var filteredVenues = _.reject(venuesObj, function(venue) {
        return venue.categories.some(function(category) {
            if (category.name.toLowerCase().indexOf('city') >= 0 || category.name.toLowerCase().indexOf('bus') >= 0 || category.name.toLowerCase().indexOf('space') >= 0 || category.name.toLowerCase().indexOf('neighborhood') >= 0 || category.name.toLowerCase().indexOf('station') >= 0 || category.name.toLowerCase().indexOf('pharmacy') >= 0 || category.name.toLowerCase().indexOf('store') >= 0 || category.name.toLowerCase().indexOf('bank') >= 0) {
                return true;
            } else {
                return false;
            }

        });
    });
    console.log(type);
    console.log(filteredVenues);
    var results = _.orderBy(filteredVenues, ['hereNow.count'], ['desc']);
    console.log(results);
    var appResultsHtml = $('#hs-place-results').html();
    appResultsTemp = $(appResultsHtml);
    console.log(appResultsTemp);
    $('#hs-results-container').empty().append(appResultsTemp);
    if (results.length == 0) {
        $('#hs-results-container').empty().append("<h1>Sorry, there's nothing going on in this area.</h1> ")
    } else {
        //loop thrue all items
        for (i = 0; i < resultLimit; i++) {

            var appResultHtml = $('#hs-result').html();
            var appResultTemp = $(appResultHtml);
            //get amount of check ins 
            var here = results[i].hereNow.count;
            venueId = results[i].id;
            var name = results[i].name;
            //get social id's
            var twitter;
            var facebook;
            //get location
            var address;
            //get type of location
            var cat = results[i].categories[0].name;
            //set fire or ice
            if (here > 0) {
                rating = 'assets/img/fire.png';
            } else {
                rating = 'assets/img/ice.png';
            }
            //append a div with each location info and check in rating
            getphotos();
            //append a div with each location info and check in rating
            console.log(appResultTemp);
            appResultsTemp.append(appResultTemp);
            appResultTemp.addClass('slideInUp ');
            appResultTemp.attr('venueId', venueId);
            appResultTemp.find('#hs-place-image').attr('src', photoUrl);
            appResultTemp.find('#hs-place-rating').attr('src', rating);
            appResultTemp.find('#name').text(name);
            appResultTemp.find('#type').text(cat);
        }
        $('#hs-results-container').append('<button id="load-more" class="btn">Load More Results</button>');
    }
}
