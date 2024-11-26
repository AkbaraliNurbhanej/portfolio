const themeToggles = document.querySelectorAll('#themeToggle, #dark'); // Select both elements
const body = document.body;

// Check localStorage for theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggles.forEach(toggle => {
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon');
    });
}

themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // Toggle dark mode class
        body.classList.toggle('dark-mode');

        // Update icons for both toggles
        themeToggles.forEach(toggle => {
            if (body.classList.contains('dark-mode')) {
                toggle.classList.remove('fa-sun');
                toggle.classList.add('fa-moon');
                localStorage.setItem('theme', 'dark');
            } else {
                toggle.classList.remove('fa-moon');
                toggle.classList.add('fa-sun');
                localStorage.setItem('theme', 'light');
            }
        });
    });
});
