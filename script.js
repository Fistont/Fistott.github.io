const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form data
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you can process the form data (e.g., send it to a server)
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}`);
  // Open target URL in a new window
  window.open("https://fistonthings.blogspot.com", '_blank');
});
