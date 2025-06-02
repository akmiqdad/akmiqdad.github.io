document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // The default theme is now set directly in index.html to 'dark-theme'
    // We only need to check localStorage if the user has manually changed it.
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && !body.classList.contains(savedTheme)) {
        // If a saved theme exists and is different from current, apply it
        body.classList.remove('light-theme', 'dark-theme'); // Remove any existing
        body.classList.add(savedTheme);
    } else if (!savedTheme) {
        // If no theme saved, ensure dark theme is set as default (already in HTML)
        localStorage.setItem('theme', 'dark-theme');
    }


    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        }
    });
});