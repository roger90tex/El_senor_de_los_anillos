// Obtener todos los elementos necesarios
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeModal = document.querySelector(".modal__close");
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navSection = document.getElementById('navSection');

// Obtener todas las imágenes en la galería
const galleryItems = document.querySelectorAll(".gallery__item");

// Agregar un evento a cada imagen
galleryItems.forEach(item => {
  item.addEventListener("click", function() {
    // Mostrar el modal
    modal.style.display = "block";
    // Configurar la imagen del modal con la imagen seleccionada
    modalImg.src = this.querySelector(".gallery__image").src;
    modalCaption.innerHTML = this.querySelector(".gallery__caption").textContent;
  });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeModal.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar el modal si se hace clic en cualquier lugar fuera de la imagen
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

 // Agregamos eventos para abrir y cerrar menú
 menuIcon.addEventListener('click', () => {
    navSection.classList.remove('hidden');
    navSection.setAttribute('aria-hidden', 'false');
});

closeIcon.addEventListener('click', () => {
    navSection.classList.add('hidden');
    navSection.setAttribute('aria-hidden', 'true');
});
