function validateForm() {
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const zipCode = document.getElementById("zipCode");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("passwordConfirmation");

  const emailError = document.getElementById("emailError");
  const countryError = document.getElementById("countryError");
  const zipCodeError = document.getElementById("zipCodeError");
  const passwordError = document.getElementById("passwordError");
  const passwordConfirmationError = document.getElementById(
    "passwordConfirmationError"
  );

  if (!email.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
  } else {
    emailError.textContent = "";
  }

  if (!country.checkValidity()) {
    countryError.textContent = "Please enter your country.";
  } else {
    countryError.textContent = "";
  }

  // Validate Zip Code
  if (!zipCode.checkValidity()) {
    zipCodeError.textContent = "Please enter a valid zip code.";
  } else {
    zipCodeError.textContent = "";
  }

  // Validate Password
  if (!password.checkValidity()) {
    passwordError.textContent = "Please enter a password.";
  } else {
    passwordError.textContent = "";
  }

  // Validate Password Confirmation
  if (password.value !== passwordConfirmation.value) {
    passwordConfirmationError.textContent = "Passwords do not match.";
  } else {
    passwordConfirmationError.textContent = "";
  }

  // Check for any validation errors before "submitting"
  if (
    email.checkValidity() &&
    country.checkValidity() &&
    zipCode.checkValidity() &&
    password.checkValidity() &&
    password.value === passwordConfirmation.value
  ) {
    alert("High five! Form submitted successfully!");
  }

  document.getElementById("email").addEventListener("blur", validateForm);
  document.getElementById("country").addEventListener("blur", validateForm);
  document.getElementById("zipCode").addEventListener("blur", validateForm);
  document.getElementById("password").addEventListener("blur", validateForm);
  document
    .getElementById("passwordConfirmation")
    .addEventListener("blur", validateForm);
}
