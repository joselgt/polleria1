// Puedes agregar JavaScript aquí para funcionalidades interactivas,
// como un carrito de compras, validación de formularios, etc.

// Ejemplo simple: Alerta al hacer clic en un enlace del menú
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        alert('Has hecho clic en: ' + this.textContent);
    });
});

