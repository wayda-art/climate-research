// Elements
const body = document.body;
const lightModeIcon = document.getElementById('lightModeIcon');
const darkModeIcon = document.getElementById('darkModeIcon');

// Load the mode from local storage on page load
window.addEventListener('load', () => {
    const mode = localStorage.getItem('mode');
    
    if (mode === 'dark') {
        body.classList.add('dark-mode');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    } else {
        body.classList.remove('dark-mode');
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
    }
});

// Toggle to dark mode
lightModeIcon.addEventListener('click', () => {
    body.classList.add('dark-mode');
    localStorage.setItem('mode', 'dark'); // Save the mode
    lightModeIcon.style.display = 'none';
    darkModeIcon.style.display = 'block';
});

// Toggle to light mode
darkModeIcon.addEventListener('click', () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('mode', 'light'); // Save the mode
    lightModeIcon.style.display = 'block';
    darkModeIcon.style.display = 'none';
});
