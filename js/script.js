// Event Listener für Nav Buttons
document.querySelectorAll('nav .btn-outline-primary').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetId = this.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        document.querySelectorAll('nav .btn').forEach(btn => {
            btn.classList.remove('btn-primary-active');
        });

        this.classList.add('btn-primary-active');

        localStorage.setItem('activeSection', targetId);
    });
});

window.addEventListener('load', () => {
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(savedSection);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        document.querySelectorAll('nav .btn-outline-primary').forEach(btn => {
            btn.classList.remove('btn-primary-active');
            if (btn.getAttribute('data-target') === savedSection) {
                btn.classList.add('btn-primary-active');
            }
        });
    }
});

// Darkmode
const themeToggler = document.getElementById('theme-toggler');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');
const themeText = document.getElementById('theme-text');
const htmlElement = document.documentElement;

function setTheme(theme) {
    // Setze das data-bs-theme Attribut
    htmlElement.setAttribute('data-bs-theme', theme);

    // Icons und Text aktualisieren
    if (theme === 'dark') {
        sunIcon.classList.add('visually-hidden');
        moonIcon.classList.remove('visually-hidden');
        themeText.textContent = 'Heller Modus';
    } else {
        sunIcon.classList.remove('visually-hidden');
        moonIcon.classList.add('visually-hidden');
        themeText.textContent = 'Dunkler Modus';
    }

    localStorage.setItem('theme', theme);
}

// Überprüfen, ob der Benutzer eine bevorzugte Einstellung hat
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
} else {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Event Listener für den Button zum Umschalten des Darkmode
themeToggler.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');

    if (currentTheme === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
});

// Handler für die Bildvorschau aller File Inputs
document.querySelectorAll(".file-input").forEach(input => {
    input.addEventListener("change", function (event) {
        const files = event.target.files;
        const form = this.closest("form");
        const previewContainer = form.querySelector(".image-preview-container");
        const preview = previewContainer.querySelector(".image-preview");
        const fileNameContainer = previewContainer.querySelector(".image-name");

        fileNameContainer.textContent = '';
        fileNameContainer.innerHTML = '';

        if (files.length > 1) {
            preview.style.display = "none";

            const ul = document.createElement('ol');
            fileNameContainer.appendChild(ul);

            Array.from(files).forEach(file => {
                const listItem = document.createElement('li');
                const fileNameText = file.name;
                const reader = new FileReader();

                reader.onload = function (e) {
                    const img = new Image();
                    img.onload = function () {
                        const width = img.width;
                        const height = img.height;
                        listItem.textContent = `${fileNameText} (${width}x${height}px)`;
                        ul.appendChild(listItem);
                    };
                    img.src = e.target.result;
                };

                reader.readAsDataURL(file);
            });
        } else if (files.length === 1) {
            const file = files[0];
            const fileNameText = file.name;
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.src = e.target.result;
                preview.style.display = "block";

                const img = new Image();
                img.onload = function () {
                    const width = img.width;
                    const height = img.height;
                    fileNameContainer.textContent = `${fileNameText} (${width}x${height}px)`;
                };
                img.src = e.target.result;
            };

            reader.readAsDataURL(file);
        } else {
            fileNameContainer.textContent = "Keine Datei ausgewählt";
            preview.style.display = "none";
        }
    });
});

// Handler für alle Clear-Buttons
document.querySelectorAll(".clear-button").forEach(button => {
    button.addEventListener("click", function () {
        const form = this.closest("form");

        const fileInput = form.querySelector(".file-input");
        fileInput.value = "";

        const previewContainer = form.querySelector(".image-preview-container");
        if (previewContainer) {
            previewContainer.querySelector(".image-preview").style.display = "none";
            previewContainer.querySelector(".image-name").textContent = "Keine Datei ausgewählt";
        }
    });
});