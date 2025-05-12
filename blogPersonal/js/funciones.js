function mostrarSeccion(id) {
  console.log("Se intentó mostrar la sección con ID:", id);
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
      seccion.classList.remove('activa');
  });
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
      seccionActiva.classList.add('activa');
      seccionActiva.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
      console.error("No se encontró la sección con ID:", id);
  }
}
// Este bloque se ejecuta cuando la página carga completamente
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulario");
  if (form) {
      form.addEventListener("submit", (e) => {
          e.preventDefault();
          alert("¡Gracias por tu mensaje mágico! Te responderé pronto ✨");
          form.reset();
      });
  }
});

// Mostrar botón "Ir arriba" al bajar
window.addEventListener('scroll', () => {
  const boton = document.getElementById('ir-arriba');
  if (window.scrollY > 300) {
      boton.style.display = 'inline-block';
  } else {
      boton.style.display = 'none';
  }
});

// Subir al hacer clic en el botón "Ir arriba" y reproducir sonido
document.getElementById('ir-arriba').addEventListener('click', () => {
  const sonido = document.getElementById('sonido-subir');
  sonido.currentTime = 0;
  sonido.play();
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});