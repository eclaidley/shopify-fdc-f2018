var emailInput = document.querySelector("#email");
var signUp = document.querySelector("#sign-up");
var alertMsg = document.querySelector("#alert-msg");
var userInterest = document.querySelector(".selected-interest");

// after clicking "Sign Up" button, ensure user's email is valid
signUp.addEventListener("click", function(e){
	e.preventDefault();
	validEmail();
});

// checks if email that was inputted by the user matches the standard email format
function validEmail(){
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(emailInput.value.match(emailFormat)){
		alertMsg.innerHTML = "";
		console.log(emailInput.value);
		console.log(userInterest.value);
		// change "Sign Up" button text to "Submitting..."
		signUp.innerHTML = "Submitting...";
	}
	else {
		alertMsg.innerHTML = "Please enter a valid email address";
		alertMsg.style.color = "#C23628";
	}
}
