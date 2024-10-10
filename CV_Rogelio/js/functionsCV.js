// Selecciona los elementos
const menuIcon = document.getElementById('menuIcon');
const profileButton = document.getElementById('profileButton');
const navSection = document.getElementById('navSection');
const profileSection = document.getElementById('profileSection');
const closeIcon = document.getElementById('closeIcon');
const closeProfile = document.getElementById('closeProfile');

// Función para cerrar ambos menús
function closeAllMenus() {
    navSection.classList.add('hidden');
    profileSection.classList.add('hidden');
  }
// Función para abrir/cerrar el menú de navegación
menuIcon.addEventListener('click', function () {
    // Cierra el perfil si está abierto
    if (!profileSection.classList.contains('hidden')) {
      profileSection.classList.add('hidden');
    }
    
    // Alterna la visibilidad del menú de navegación
    navSection.classList.toggle('hidden');
  });
// Función para abrir/cerrar el perfil
profileButton.addEventListener('click', function () {
    // Cierra el menú de navegación si está abierto
    if (!navSection.classList.contains('hidden')) {
      navSection.classList.add('hidden');
    }
    
    // Alterna la visibilidad del perfil
    profileSection.classList.toggle('hidden');
  });
  
  // Cerrar el menú de navegación al hacer clic en la X
  closeIcon.addEventListener('click', function () {
    navSection.classList.add('hidden');
  });
  
  // Cerrar el perfil al hacer clic en la X
  closeProfile.addEventListener('click', function () {
    profileSection.classList.add('hidden');
  });

  const form = document.querySelector('.contact__form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulamos la validación
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert('¡Mensaje enviado con éxito!');
            form.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    const themeToggleButton = document.querySelector('.theme-toggle');

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('.header').classList.toggle('dark-mode');
        document.querySelectorAll('.profile, .education, .skills, .languages, .contact').forEach(section => {
            section.classList.toggle('dark-mode');
        });
    });
