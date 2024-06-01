const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Add validation checks here (e.g., password length, email format)
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  // Simulate form submission (replace with actual submission logic)
  console.log('Submitted! Username:', username, 'Email:', email);

  // Redirect after successful validation (replace with your target URL)
  window.location.href = 'https://fistonthings.blogspot.com'; // Update with your actual redirection page
});
