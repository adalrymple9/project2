var photoUrl;

var venueId;

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
            venueId = venuesObj[i].id;
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
    var results = _.orderBy(filteredVenues, ['hereNow.count'], ['desc']);
}
