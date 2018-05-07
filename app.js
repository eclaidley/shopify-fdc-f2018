var emailInput = document.querySelector("#email");
var signUp = document.querySelector("#sign-up");
var alertMsg = document.querySelector("#alert-msg");
var userInterest = document.querySelector(".selected-interest");
var submissionHeader = document.querySelector("#submission-header");
var submissionForm = document.querySelector("#submission-form");

// after clicking "Sign Up" button, ensure user's email is valid
signUp.addEventListener("click", function(e){
	// prevents page reload upon submission of form
	e.preventDefault();
	validEmail();
});

// checks if email that was inputted by the user matches the standard email format
function validEmail(){
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(emailInput.value.match(emailFormat)){
		alertMsg.innerHTML = "";
		// log value of each field to browser console
		console.log(emailInput.value);
		console.log(userInterest.value);
		submittingButton();
		// prevents button from being pressed multiple times during submission
		signUp.disabled = true;
		// keeps "Submitting..." button up for 2 seconds
		setTimeout(function() {
			successfulSubmission();
		}, 2000);
	}
	else {
		alertMsg.innerHTML = "Please enter a valid email address";
		alertMsg.style.color = "#C23628";
	}
}

function submittingButton(){
	// change "Sign Up" button text to "Submitting..."
	signUp.innerHTML = "Submitting...";
}

function successfulSubmission(){
	submissionHeader.innerHTML = "Thanks for subscribing";
	submissionForm.innerHTML = "You'll start receiving free tips and resources soon.";
	submissionForm.style.color = "white";
}