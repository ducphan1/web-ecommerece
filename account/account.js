function openTab(tabId) {
    const tabs = document.querySelectorAll('.sidebar ul li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    const currentTab = document.querySelector(`li[onclick="openTab('${tabId}')"]`);
    if (currentTab) {
        currentTab.classList.add('active');
    }
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
           const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
                   document.getElementById('firstName').value = loggedInUser.name.split(" ")[0];
        document.getElementById('lastName').value = loggedInUser.name.split(" ")[1];
        document.getElementById('email').value = loggedInUser.email;
        document.getElementById('address').value = loggedInUser.address || '';

                   document.querySelector('.welcome span').textContent = loggedInUser.name;
    } else {
        alert('Please log in to view your account.');
        window.location.href = "../login/login.html";
    }
});

   function updateProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    const updatedUser = {
        name: `${firstName} ${lastName}`,
        email: email,
        address: address
    };

           localStorage.setItem(email, JSON.stringify(updatedUser));
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

    alert('Profile updated successfully!');
}

   document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();        updateProfile();
});

   document.addEventListener('DOMContentLoaded', function() {
           const dropdownBtn = document.querySelector('.profile-dropdown-btn');
    const dropdown = document.querySelector('.profile-dropdown-list');

           if (dropdownBtn && dropdown) {
                   dropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();                toggleDropdown();             });

                   document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target) && !dropdownBtn.contains(e.target)) {
                dropdown.classList.remove('active');                 }
        });
    }
});
