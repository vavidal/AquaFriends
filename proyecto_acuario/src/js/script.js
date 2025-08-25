document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');


    const triggers = document.querySelectorAll('[data-bs-target="#lightboxModal"]');

    triggers.forEach(link => {
        link.addEventListener('click', (e) => {
        
            e.preventDefault();

            
            const imgUrl = link.getAttribute('data-img') || link.querySelector('img')?.src;
            const alt = link.querySelector('img')?.alt || 'Imagen de galería';

            if (imgUrl) {
                lightboxImg.src = imgUrl;
                lightboxImg.alt = alt;
            }
        });
    });

    lightboxModal.addEventListener('hidden.bs.modal', () => {
        lightboxImg.src = '';
        lightboxImg.alt = '';
    });
});
