 function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
     
    if (!name || !email || !password) {
      alert("Please fill out all fields.");
      return;
    }
  
     
    if (localStorage.getItem(email)) {
      alert("User already exists. Please log in.");
      return;
    }
  
     
    const user = {
      name: name,
      email: email,
      password: password,
    };
  
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful!");
  
     
    window.location.href = "../login/login.html";
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