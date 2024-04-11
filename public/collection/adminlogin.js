// // document.addEventListener('DOMContentLoaded', async () => {
// //     const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form
  
// //     // Event listener for form submission
// //     adminloginForm.addEventListener('submit', async (event) => {
// //       event.preventDefault();
  
// //       const email = document.getElementById('email_for_admin_login').value;
// //       const password = document.getElementById('password_for_admin_login').value
  
// //       try {
// //         // Fetch request for login
// //         const adminloginResponse = await fetch('/api/admin/login', { // Use your endpoint
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json'
// //           },
// //           body: JSON.stringify({ email, password })
// //         });
  
// //         if (!adminloginResponse.ok) {
// //           throw new Error('Failed to login admin');
// //         }
  
// //         // Assuming login was successful, redirect to admin.html
// //         window.location.href = 'admin.html'; // Redirect after successful login
  
// //       } catch (loginError) {
// //         console.error('Error logging in user:', loginError.message);
// //         // Handle login error
// //         // Display error message to the user
// //         const adminloginErrorElement = document.getElementById('admin-login-error');
// //         adminloginErrorElement.textContent = 'Invalid email or password';
// //       }
// //     });
// //   });

// // adminlogin.js

// document.addEventListener('DOMContentLoaded', async () => {
//   const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form

//   // Event listener for form submission
//   adminloginForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = document.getElementById('email_for_admin_login').value;
//     const password = document.getElementById('password_for_admin_login').value;

//     try {
//       // Fetch request for login
//       const adminloginResponse = await fetch('/api/admin/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });

//       // Check the response status explicitly
//       if (adminloginResponse.ok) {
//         // Redirect to admin.html if the response status is OK (status code 200)
//         window.location.href = 'admin.html';
//       } else {
//         // Log the error message and display a generic error to the user
//         console.error('Failed to login admin. Status:', adminloginResponse.status);
//         throw new Error('Failed to login admin');
//       }
//     } catch (loginError) {
//       console.error('Error logging in user:', loginError.message);
//       // Handle login error
//       // Display error message to the user
//       const adminloginErrorElement = document.getElementById('admin-login-error');
//       adminloginErrorElement.textContent = 'Failed to login admin. Please try again later.';
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', async () => {
  const adminloginForm = document.querySelector('.sign-in-form'); // Select the login form

  // Event listener for form submission
  adminloginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email_for_admin_login').value;
    const password = document.getElementById('password_for_admin_login').value;

    try {
      // Fetch request for login
      const adminloginResponse = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      // Check the response status explicitly
      if (adminloginResponse.status >= 200 && adminloginResponse.status < 300) {
        // Redirect to admin.html if the response status is OK (status code 200)
        window.location.href = 'admin.html';
      } else {
        // Handle the case where the response status is not OK
        console.error('Failed to login admin');
      }
    } catch (loginError) {
      console.error('Error logging in user:', loginError.message);
      // Handle login error
      // Display error message to the user
      const adminloginErrorElement = document.getElementById('admin-login-error');
      adminloginErrorElement.textContent = 'Invalid email or password';
    }
  });
});

