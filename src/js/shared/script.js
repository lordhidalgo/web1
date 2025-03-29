// script.js
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const catalogSection = document.getElementById("catalog-section");

    // Manejar el evento de inicio de sesión
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        // Aquí podrías realizar una validación de usuario
        if (username === "admin" && password === "1234") {
            alert("Inicio de sesión exitoso");
            catalogSection.style.display = "block"; // Mostrar catálogo
            document.querySelector('.login-form').style.display = "none"; // Ocultar el formulario de inicio de sesión
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });

    // Cargar el catálogo de juegos (puedes personalizarlo)
    loadGameCatalog();
});

// Función para cargar el catálogo de juegos
function loadGameCatalog() {
    const games = [
        {
            name: "Juego 1",
            availability: "En stock",
            image: "ruta/a/imagen1.jpg",
        },
        {
            name: "Juego 2",
            availability: "Agotado",
            image: "ruta/a/imagen2.jpg",
        },
        {
            name: "Juego 3",
            availability: "En stock",
            image: "ruta/a/imagen3.jpg",
        },
        // Añade más juegos aquí
    ];

    const gameCatalog = document.getElementById("game-catalog");

    games.forEach((game) => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <div class="availability">Disponibilidad: ${game.availability}</div>
            <button>Añadir al Carrito</button>
        `;
        gameCatalog.appendChild(gameItem);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        },
      },
    });
  });
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);  // Convierte los hijos en un array
  const prevButton = document.querySelector('.carousel-button.left');
  const nextButton = document.querySelector('.carousel-button.right');
  
  let currentIndex = 0;
  
  function moveToSlide(index) {
      const itemWidth = items[0].getBoundingClientRect().width;  // Ancho de una imagen
  
      // Desplazamos el carrusel
      track.style.transition = "transform 0.5s ease"; // Aseguramos que la transición se vea suave
      track.style.transform = `translateX(-${index * (itemWidth + 20)}px)`; // Mueve el carrusel
  
      // Reorganiza las imágenes al final del ciclo, sin espacio vacío
      setTimeout(() => {
          const firstItem = track.querySelector('.carousel-item');
          track.appendChild(firstItem); // Mueve el primer elemento al final del track
          track.style.transition = "none"; // Desactiva la transición mientras reordenamos las imágenes
  
          // Reajustamos la posición sin crear espacio
          track.style.transform = `translateX(0px)`;
  
          setTimeout(() => {
              track.style.transition = "transform 0.5s ease"; // Reactiva la transición
          }, 20); // Breve pausa para asegurar que la transición se reactive
  
      }, 500); // Espera a que termine la animación antes de mover las imágenes
  }
  
  // Avanza al siguiente elemento (mueve todas las imágenes hacia la izquierda)
  nextButton.addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= items.length) {
          currentIndex = 0;  // Vuelve al inicio cuando llega al final
      }
      moveToSlide(currentIndex);
  });
  
  // Retrocede al elemento anterior (mueve todas las imágenes hacia la derecha)
  prevButton.addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = items.length - 1;  // Vuelve al final cuando llega al principio
      }
      moveToSlide(currentIndex);
  });