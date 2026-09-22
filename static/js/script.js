document.addEventListener('DOMContentLoaded', () => {

  const menuBtn = document.getElementById('menu');
  const navLinks = document.getElementById('links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    document.querySelectorAll('.links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
      });
    });
  }

  const skillSection = document.getElementById('habilidad');
  const progressBars = document.querySelectorAll('.progress');

  function animateSkills() {
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = targetWidth;
    });
  }

  if (skillSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkills();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(skillSection);
  }

  const buttons = document.querySelectorAll('.boton');
  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      button.style.transform = 'scale(0.95)';
      setTimeout(() => {
        button.style.transform = 'none';
      }, 150);
    });
  });

});
const themeToggle = document.getElementById("theme-toggle");

// 1. Cargar tema guardado en el navegador
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// 2. Evento para cambiar de tema al hacer clic
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDark = document.body.classList.contains("dark-mode");

  // Cambiar el ícono: Sol si está en oscuro, Luna si está en claro
  themeToggle.textContent = isDark ? "☀️" : "🌙";

  // Guardar la preferencia en localStorage
  localStorage.setItem("theme", isDark ? "dark" : "light");
});