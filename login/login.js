 function loginUser() {
  const email = document.getElementById('email-phone').value;
  const password = document.getElementById('password').value;

     const storedUser = JSON.parse(localStorage.getItem(email));

  if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
  }

  if (storedUser.password === password) {
      alert("Login successful!");

             localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

             window.location.href = "../homepage/homepage.html";
  } else {
      alert("Incorrect password. Please try again.");
  }
}


   function togglePasswordVisibility(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
    }
  }