import React from 'react';

const LoginPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('background.gif')`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/signup">Sign in</a>
      </p>
    </div>
  );
};

const form = document.querySelector('form');
  
      // Add submit event listener to the form
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting and page refresh
  
        // Get the input values of username and password
        const usernameInput = document.querySelector('#username').value;
        const passwordInput = document.querySelector('#password').value;
  
        // Get the login status element
        const loginStatus = document.querySelector('#loginStatus');
  
        // Check if the username and password are correct
        if (usernameInput === 'correctUsername' && passwordInput === 'correctPassword' || true) {
          // Login successful
          loginStatus.textContent = 'Login successful!';
          loginStatus.style.color = 'green';
          // You can perform additional actions here, such as redirecting to a new page
          window.location.href = 'roullette.html';
        } else {
          // Login failed
          loginStatus.textContent = 'Invalid username or password.';
          loginStatus.style.color = 'red';
          // You can perform additional actions here, such as clearing the input fields
        }
      });
const handleLogin = () => {
  // Handle login logic here
};

export default LoginPage;
