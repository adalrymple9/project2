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

//--------------------logic for trip------------------------//

//loop through questions
//store responses in a object
var tripSetUp = {
    // days: ,
    // startDate:,
    // startLocation:
};
//after last question load trip page

//when trip page loads
//create new trip array for current trip
var newTrip = [];
//create new day object
var newDay = {
    activities: []
};

//load venue data into container

//send request to server with an opject containing the location and catigory
$('#p2-venues').load('/venuesList');
//load current day tab
//$('#p2-dataContainer').load('/currentday', newDay);
//event handler for add venue button
//when the add button is pressed 
//$().on('click', element, function(){ 	
//get details from selected venue
//set details in object
//push object to activities array in newDay object
// newDay.activities.push(newActivity);
//add 1 activity counter 
// activity++;
//if counter = 5
//reset counter to 0 
//activity = 0;
//push newDay object to newTrip array
// newTrip.push(newDay);
//empty newDay oject
//
//add to day counter
// day++;
//if day counter = tripSetUp
//send data to server '/api/setnewtrip'
//load trip view page 
//else render current day tap 
// });

//event handler for days tab
$('body').on('click', '#p2-daysButton', function() {
    //get days partial and use newTrip array for data
    $('#p2-dataContainer').load('/days');
});


//event handler for current tab
$('body').on('click', '#p2-currentDayButton', function() {
    //get current partial and load data from newDay object
    $('#p2-dataContainer').load('/curentday');
});



//-----------------------logic for trip view page------------------//
