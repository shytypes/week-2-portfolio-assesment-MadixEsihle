const form =
document.getElementById ('contact-form');
const formResponse =
document.getElementById('form-response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName =
  document.getElementById('first-name').value.trim();
  const lastName =
  document.getElementById('last-name').value.trim();
  const email =
  document.getElementById('email').value.trim();
  const message =
  document.getElementById('message').value.trim();

  //Validate form fields
  if (firstName === '' || lastName === '' || email === '' || message === '') {
    formResponse.textContent = 'Please fill out all fields.';
    formResponse.style.color = 'black';
    return;
  }

  if (!validateEmail(email)) {
    formResponse.textContent = 'Invalid email address.';
    formResponse.style.color = 'black';
    return;
  }

  //Submit the form data
  const formData = {
    firstName,
    lastName,
    email,
    message,
  };

  //Send the form data to the server
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then((response) => response.json())
  .then((data) => {
    formResponse.textContent = 'Form submitted successfully!';
    formResponse.style.color = 'teal';
    form.reset();
  })
  .catch((error) => {
    formResponse.textContent = 'Error submitting form.';
    formResponse.style.color = 'red';
    console.error(error);
  });
});



const handleFormSubmit = (e) => {
  let firstName = document.querySelector("#firstName").value;
  let lastName = document.querySelector("#lastName").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  let resultView = document.querySelector("#result-view");

  e.preventDefault();
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  };

  const userDataAsJson = JSON.stringify(userData);

  console.log(userData);
  console.log(
    "================================================================="
  );
  console.log(userDataAsJson);

  resultView.innerHTML = `<li>First Name: ${userData.firstName}</li><li>Last Name: ${userData.lastName}</li><li>Email: ${userData.email}</li><li>Message: ${userData.message}</li>`;
};
form.addEventListener("submit", handleFormSubmit);

const image =
document.getElementById('image');
let angle = 0;

function spinImage () {
    angle += 5;
    image.style.transform = `rotateY(${angle}deg)`;
    requestAnimationFrame(spinImage)

}
spinImage()

const button =
document.querySelector('.moving-button');
let position = 0;

function moveButton() {
  position = Math.sin(Date.now() * 0.01)
  *10;
  button.style.transform = 'translateY (${position}px)';
  requestAnimationFrame(moveButton);
}
moveButton()

