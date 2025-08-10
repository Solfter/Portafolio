fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Configurar el evento del menú hamburguesa después de cargar el navbar
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }
  })
  .catch(err => console.error('Error cargando navbar:', err));
