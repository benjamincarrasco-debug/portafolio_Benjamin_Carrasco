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