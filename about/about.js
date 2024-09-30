document.addEventListener('DOMContentLoaded', function() {
    function toggleDropdown() {
        const dropdown = document.querySelector('.profile-dropdown-list');
        dropdown.classList.toggle('active');
    }

    document.querySelector('.profile-dropdown-btn').addEventListener('click', toggleDropdown);
});
