document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');

    // Todos los enlaces que abren el lightbox
    const triggers = document.querySelectorAll('[data-bs-target="#lightboxModal"]');

    triggers.forEach(link => {
        link.addEventListener('click', (e) => {
            // Evita que el href="#" desplace la página
            e.preventDefault();

            // Usa data-img si existe; si no, usa el src de la miniatura
            const imgUrl = link.getAttribute('data-img') || link.querySelector('img')?.src;
            const alt = link.querySelector('img')?.alt || 'Imagen de galería';

            if (imgUrl) {
                lightboxImg.src = imgUrl;
                lightboxImg.alt = alt;
            }
        });
    });

    // Limpia al cerrar (libera memoria en móviles)
    lightboxModal.addEventListener('hidden.bs.modal', () => {
        lightboxImg.src = '';
        lightboxImg.alt = '';
    });
});
