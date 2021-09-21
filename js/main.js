const contactForm = document.getElementById("email-me-form");

function validateEmail(event) {
  let re = /\S+@\S+\.\S+/;
	let email = document.getElementById("email").value;
  if(re.test(email)) {
    document.getElementById("invalid-email").style.display="none";
  } else {
    document.getElementById("invalid-email").style.display="block";
		event.preventDefault();
  }
}

contactForm.addEventListener("submit", validateEmail);
