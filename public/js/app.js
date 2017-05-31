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
	    $.post(
	        //if true change loged in state to true and guide to profile page
	        //else keep loged in state at false and prompt user to check info
	    );
	});
//-------------------logic for profile----------------------//


//--------------------logig for trip------------------------//
