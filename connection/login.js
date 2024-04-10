const loginForm = document.querySelector('.sign-in-form');
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email_for_login').value;
  const password = document.getElementById('password_for_login').value;
  const role = document.getElementById('role_for_login').value;

  try {
    const loginResponse = await fetch(`/api/${role}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!loginResponse.ok) {
      // Handle invalid credentials by displaying an error message
      const errorMessage = await loginResponse.json();
      document.getElementById('login-error').textContent = errorMessage.error;
      return;
    }

    const loginUserData = await loginResponse.json();
    console.log('User logged in successfully:', loginUserData);

    // Redirect to appropriate home page based on role
    if (loginUserData.role === 'farmer') {
      window.location.href = "admin.html";
    } else if (loginUserData.role === 'customer') {
      window.location.href = "customerhome.html";
    } else {
    }

  } catch (loginError) {
    console.error('Error logging in user:', loginError.message);
  }
});
