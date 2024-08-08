document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.content-left ul li a');
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const body = document.body;
    const zoomOutIcon = document.getElementById('zoom-out-icon');
    const zoomInIcon = document.getElementById('zoom-in-icon');
    const zoomLevels = document.querySelectorAll('.zoom-level');

    let zoomLevel = 1; // Start at the second zoom level (standard)

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('expanded');
        menuIcon.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove('active'));
            link.classList.add('active');
            menu.classList.remove('expanded');
        });
    });


    // NmeInject hizi codes
    window.addEventListener('load', () => {
        const mode = localStorage.getItem('theme');
        
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

    lightModeIcon.addEventListener('click', () => {
        body.classList.add('dark-mode');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
        localStorage.setItem('theme', 'dark'); 
    });

    darkModeIcon.addEventListener('click', () => {
        body.classList.remove('dark-mode');
        lightModeIcon.style.display = 'block';
        darkModeIcon.style.display = 'none';
        localStorage.setItem('theme', 'light'); 
    });

    zoomOutIcon.addEventListener('click', () => {
        if (zoomLevel > 0) {
            zoomLevels[zoomLevel].style.backgroundColor = '#f9f9f9';
            zoomLevel--;
            updateZoom();
        }
    });

    zoomInIcon.addEventListener('click', () => {
        if (zoomLevel < 2) {
            zoomLevel++;
            zoomLevels[zoomLevel].style.backgroundColor = '#333';
            updateZoom();
        }
    });

    function updateZoom() {
        document.documentElement.style.fontSize = (1.5 + 0.2 * zoomLevel) + 'em';
    }
});
