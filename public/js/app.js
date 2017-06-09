//-----------------logic for home----------------------//

//loads sign up form when register button is pressed
$('#p2-registerNow').on('click', function() {
    event.preventDefault();
    $('#p2-signIn').addClass('slideOutUp animated');
    $('#p2-registration').toggle();
    $('#p2-signIn').toggle();
    $('#p2-registerNow').toggle();
    $('#p2-registration').addClass('fadeIn animated');
});
//clears error mess from the sign up when a key is pressed
$('#p2-password').keyup(function() {
    $('#p2-signUpMess').text(' ')
});
$('#p2-confirmPassword').keyup(function() {
    $('#p2-signUpMess').text(' ')
});

//collects data from sign up form when submit button is pressed
$('body').on('click', '#p2-crateProfile', function() {
    event.preventDefault();
    var userName = $('#p2-userName').val();
    var password = $('#p2-password').val();
    var confirmPassword = $('#p2-confirmPassword').val();
    //checks if the passwords match before setting them in the array
    if (password === confirmPassword) {
        var newUser = {
            userName: userName,
            password: password
        };
    } else {
        //using alert for now will make a tooltip after
        $('#p2-signUpMess').text('Sorry the passwords dont match.');
    }
    console.log(newUser);
});

//collects data from log in form when the log in button is pressed
$('#p2-logIn').on('click', function() {
    event.preventDefault();
    var userName = $().val();
    var password = $().val();
    var user = { userName: userName, password: password };
    //send data to data base to compair the values
    $.post('/logIn', function() {
        //if true change loged in state to true and guide to profile page
        //else keep loged in state at false and prompt user to check info
    });
});
//-------------------logic for profile----------------------//

//load set up page when add trip button is pressed
// $(element).on('click', runSetup);

//--------------------logic for trip------------------------//

//loop through questions
function runSetup(){
	$.get('/setuppage', function(){
		console.log('ran setup page');
	});
}
//store responses in a object
var tripSetUp = {
    // days: ,
    // startDate:,
    // startLocation:
    //user token or name
};
//after last question load trip page
$.post('users/trips/new-trip', tripSetUp);
//when trip page loads
//create new trip array for current trip
var newTrip = [];
//create new day object
var newDay = {
    activities: []
};
//activity counter
var activityCounter;
//day counter
var dayCounter;

//send request to server with an opject containing the location
// $('#p2-venues').load('/venuesList', tripSetUp.startLocation);
// //load current day tab
// $('#p2-dataContainer').load('/currentday', newDay);
//event handler for add venue button
//when the add button is pressed 
// $('body').on('click', '.p2-addVenueButton', function() {
//     //get details from selected venue
//     //set details in object
//     var selectedActivity = {
//         // name: $(this).siblings('.p2-venueName').text();
//         // category: $(this).siblings('.p2-venueCat').text();
//         // image: $(this).siblings('.p2-venueImage').attr('src');
//     };
//     //push object to activities array in newDay object
//     newDay.activities.push(selectedActivity);
//     //add 1 activity counter 
//     activityCounter++
//     //check if all activities have been selected
//     if (activityCounter >= 5) {
//         //reset counter to 0 
//         activityCounter = 0;
//         //push newDay object to newTrip array
//         newTrip.push(newDay);
//         //empty newDay oject
//         newDay = {
//             activities: []
//         };
//         //add to day counter
//         dayCounter++;
//     };
//     //check if all days have been set up
//     //if all days set up
//     if (dayCounter === tripSetUp.days) {
//         //send data to server '/api/setnewtrip'
//         $.put('/setnewtrip', function() {

//         });
//         //load trip view page 
//         $().load('/profile')
//     }
//     //else render current day tab
//     else {

//     };
// });

//event handler for days tab
$('body').on('click', '#p2-daysButton', function() {
    //get days partial and use newTrip array for data
    $('#p2-dataContainer').load('/days');
});


//event handler for current tab
$('body').on('click', '#p2-currentDayButton', function() {
    //get current partial and load data from newDay object
    $('#p2-dataContainer').load('/currentday', newDay);
});



//-----------------------logic for trip view page------------------//
