document.querySelectorAll('.content-left a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.main-content > h2').forEach(section => {
            section.classList.add('hidden');
        });
        document.querySelector(this.getAttribute('href')).classList.remove('hidden');
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

const textSizeRadios = document.querySelectorAll('input[name="text-size"]');
const widthRadios = document.querySelectorAll('input[name="width"]');
const colorRadios = document.querySelectorAll('input[name="color"]');
const body = document.body;
const mainContent = document.querySelector('.main-content');
const contentLeft = document.querySelector('.content-left');
const contentRight = document.querySelector('.content-right');

function applySettings() {
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
        document.querySelector(`input[name="text-size"][value="${settings.textSize}"]`).checked = true;
        document.querySelector(`input[name="width"][value="${settings.width}"]`).checked = true;
        document.querySelector(`input[name="color"][value="${settings.color}"]`).checked = true;

        if (settings.textSize === 'small') {
            body.classList.add('text-small');
        } else if (settings.textSize === 'large') {
            body.classList.add('text-large');
        }

        if (settings.width === 'wide') {
            mainContent.classList.add('wide');
        }

        if (settings.color === 'light') {
            body.classList.add('light-mode');
        } else if (settings.color === 'dark') {
            body.classList.add('dark-mode');
            contentLeft.classList.add('dark-mode');
            contentRight.classList.add('dark-mode');
            mainContent.classList.add('dark-mode');
        }
    }
}

function lockInSettings() {
    const settings = {
        textSize: document.querySelector('input[name="text-size"]:checked').value,
        width: document.querySelector('input[name="width"]:checked').value,
        color: document.querySelector('input[name="color"]:checked').value
    };
    localStorage.setItem('settings', JSON.stringify(settings));
    alert('Settings locked in!');
}

textSizeRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        body.classList.remove('text-small', 'text-large');
        if (this.value === 'small') {
            body.classList.add('text-small');
        } else if (this.value === 'large') {
            body.classList.add('text-large');
        }
    });
});

widthRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        mainContent.classList.remove('wide');
        if (this.value === 'wide') {
            mainContent.classList.add('wide');
        }
    });
});

colorRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        body.classList.remove('light-mode', 'dark-mode');
        if (this.value === 'light') {
            body.classList.add('light-mode');
        } else if (this.value === 'dark') {
            body.classList.add('dark-mode');
            contentLeft.classList.add('dark-mode');
            contentRight.classList.add('dark-mode');
            mainContent.classList.add('dark-mode');
        }
    });
});

applySettings();

colorRadios.forEach(radio => {
    radio.addEventListener('change', function () {
        body.classList.remove('light-mode', 'dark-mode');
        if (this.value === 'light') {
            body.classList.add('light-mode');
        } else if (this.value === 'dark') {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode')
            contentLeft.classList.add('dark-mode');
            contentRight.classList.add('dark-mode');
            mainContent.classList.add('dark-mode');
        }
    });
});

applySettings();

