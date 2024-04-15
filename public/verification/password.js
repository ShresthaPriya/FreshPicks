document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password_for_signup');
    const confirmPasswordInput = document.getElementById('confirm_password_for_signup');
    const signupErrorElement = document.getElementById('signuppassword-error');

    function validatePassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        // Check if password contains at least one capital letter and one number
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            signupErrorElement.textContent = 'Password must contain at least one capital letter and one number, and be at least 6 characters long';
            return false;
        }

        // Clear error message if passwords match
        if (password === confirmPassword) {
            signupErrorElement.textContent = '';
            return true;
        }

        // Check if confirm password field is not empty before showing error message
        if (confirmPassword !== '') {
            signupErrorElement.textContent = 'Passwords do not match';
            return false;
        }

        return true;
    }

    // Event listener for password input
    passwordInput.addEventListener('input', validatePassword);

    // Event listener for confirm password input
    confirmPasswordInput.addEventListener('input', validatePassword);

    // Event listener for form submission
    document.querySelector('.sign-up-form').addEventListener('submit', (event) => {
        if (!validatePassword()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
