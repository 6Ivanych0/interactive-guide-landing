JavaScript
const guide = document.getElementById('guide');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    guide.style.transform = `translateY(${scrollY * 0.05}px)`; // Эффект движения
});
