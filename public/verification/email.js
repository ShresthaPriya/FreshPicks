document.addEventListener("DOMContentLoaded", function() {
  function validateForm() {
    var usernameField = document.getElementById("username_for_signup").value.trim();
    var emailField = document.getElementById("email_for_signup").value.trim();
    var addressField = document.getElementById("address_for_signup").value.trim();
    var passwordField = document.getElementById("password_for_signup").value.trim();
    var confirmPasswordField = document.getElementById("confirm_password_for_signup").value.trim();

    var usernameError = document.getElementById("errormsg_for_username");
    var emailError = document.getElementById("errormsg_for_email");
    var addressError = document.getElementById("errormsg_for_address");
    var passwordError = document.getElementById("signuppassword-error");

    var signupError = document.getElementById("signup-error");

    // Check if any field is empty
    if (usernameField === "" || emailField === "" || addressField === "" || passwordField === "" || confirmPasswordField === "") {
      signupError.innerText = "All fields are required.";
      return false; // Return false to prevent form submission
    }

    // Clear any previous error messages
    signupError.innerText = "";

    // Validate email format
    if (!emailField.match(/^([a-zA-Z0-9_\-]+)@([a-zA-Z_\-]+)\.([a-zA-Z]{2,5})$/)) {
      emailError.innerText = "Please enter a valid email address";
      return false; // Return false to prevent form submission
    }

    // Validate password match
    if (passwordField !== confirmPasswordField) {
      passwordError.innerText = "Passwords do not match";
      return false; // Return false to prevent form submission
    }

    // Clear any previous error messages
    usernameError.innerText = "";
    emailError.innerText = "";
    addressError.innerText = "";
    passwordError.innerText = "";

    return true; // Return true to allow form submission
  }

  // Add event listener to the form submit event
  document.querySelector(".sign-up-form").addEventListener("submit", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
});
