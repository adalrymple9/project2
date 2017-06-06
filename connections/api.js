var photoUrl;

function() {}
$.post('api/trip', function(req, res) {
    //getting the request data to get city info from front-end
    var city;
    //foursquare api call
    $.ajax({
            url: 'https://api.foursquare.com/v2/venues/search?v=20161016',
            medthod: 'GET',
            data: {
                near: city,
                radius: '10000',
                limit: '100',
                client_id: 'I23VPE32IPM5CTJ0DLH0QD1AUGOMINAG5UVUHK11CZJDUUJC',
                client_secret: 'DST5ED0CW1XQZN2GY4QD2JLOZY1W5EUSCFC3OFME1ECFLBLI'
            }
        })
        .done(function(response) {
            console.log("success");;
            //array of objects with API 
            var venueData = []

            //need a for loop to loop through response 
            for () {
                var venuesObj = response.response.venues[i].id;
                getPhotos();

                //get correct var names from forsquare API 
                //create vars for: image of the place, name, catagory and location
                var venue = {
                    image: photoUrl,
                    name: response[i].ven.name,
                    cat: response[i].ven.cat,
                    loc: response[i].ven.loc
                }
                venueData.push(venue);
            }
            var venues = {
                Venue: venueData;
            }

            //get correct partial render
            res.render("partials/ven", venues);
        })
        .fail(function() {
            console.log("error");
        });

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
