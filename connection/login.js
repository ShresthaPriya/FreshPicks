document.querySelector('.sign-in-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(this); // Get form data
    const url = '/api/auth/login'; 
    try {
        const response = await fetch(url, {
            method: 'post',
            body: formData
        });
          
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Handle success response
        }else{
            throw new Error('Failed to login'); // Handle error response
            // console.log('Failed to login');
        }
    } catch (error) {
        console.error(error.message);
    }
});




// document.addEventListener('DOMContentLoaded', () => {
//     const signupForm = document.getElementById('signup-form');
  
//     signupForm.addEventListener('submit', async (event) => {
//       event.preventDefault();
  
//       const email = document.getElementById('email').value;
//       const username = document.getElementById('username').value;
//       const dob = document.getElementById('dob').value;
//       const password = document.getElementById('password').value;
  
//       try {
//         const response = await fetch('/api/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ email, username, dob, password })
//         });
  
//         if (!response.ok) {
//           throw new Error('Failed to register user');
//         }
  
//         const userData = await response.json();
//         console.log('User registered successfully:', userData);
//         // Redirect or perform other actions after successful registration
//       } catch (error) {
//         console.error('Error registering user:', error.message);
//       }
//     });
// });