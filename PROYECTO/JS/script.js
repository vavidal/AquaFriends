document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});