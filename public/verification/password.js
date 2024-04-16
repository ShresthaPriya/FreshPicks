document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password_for_signup');
    const confirmPasswordInput = document.getElementById('confirm_password_for_signup');
    const signupErrorElement = document.getElementById('signuppassword-error');

    function validatePasswordFormat() {
        const password = passwordInput.value.trim();

        // Reset error message if password is empty
        if (password === '') {
            signupErrorElement.textContent = '';
            return false;
        }

        // Check if password contains at least one capital letter, one number, and is at least 6 characters long
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (!passwordRegex.test(password)) {
            signupErrorElement.textContent = 'Password must contain one capital letter, one number, and be at least 6 characters long';
            return false;
        }

        // Clear error message if password format is correct
        signupErrorElement.textContent = '';
        return true;
    }

    function validatePasswordMatch() {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Reset error message if both fields are empty
        if (password === '' && confirmPassword === '') {
            signupErrorElement.textContent = '';
            return false;
        }

        // Show error message if passwords do not match and confirm password is not empty
        if (password !== confirmPassword && confirmPassword !== '') {
            signupErrorElement.textContent = 'Passwords do not match';
            return false;
        }

        // Clear error message if passwords match or confirm password is empty
        signupErrorElement.textContent = '';
        return true;
    }

    // Event listener for password input
    passwordInput.addEventListener('input', validatePasswordFormat);

    // Event listener for confirm password input
    confirmPasswordInput.addEventListener('input', validatePasswordMatch);

    // Event listener for form submission
    document.querySelector('.sign-up-form').addEventListener('submit', (event) => {
        if (!validatePasswordFormat() || !validatePasswordMatch()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
