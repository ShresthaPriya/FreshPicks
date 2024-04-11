const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


document.addEventListener("DOMContentLoaded", function() {
  const backButton = document.getElementById("backButton");

  backButton.addEventListener("click", function(event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    
    // Perform any additional actions here, such as animations or prompts
    
    // Redirect to the login_ad.html page after a short delay (for demonstration purposes)
    setTimeout(function() {
      window.location.href = backButton.getAttribute("href");
    }, 500); // Adjust the delay time as needed
  });
});
