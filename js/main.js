const contactForm = document.getElementById('email-me-form');
const skillCards = document.getElementsByClassName('skill-card');
const flipButtons = document.getElementsByClassName('flip-card-btn');

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

if(contactForm !== null) {
  contactForm.addEventListener("submit", validateEmail);
}

for(var i = 0; i < flipButtons.length; i++) {
  let button = flipButtons[i];
  let card = skillCards[i];
  button.addEventListener('click', () => {
    card.classList.toggle('is-flipped');
  });
}
