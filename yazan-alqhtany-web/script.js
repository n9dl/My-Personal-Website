const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const body = document.body;

hamburger.addEventListener('click', (event) => {
    event.stopPropagation(); 
    nav.classList.toggle('active');
    hamburger.classList.toggle('fa-xmark');
    hamburger.classList.toggle('fa-bars');
    body.classList.toggle('no-scroll');
});

nav.addEventListener('click', () => {
    nav.classList.remove('active');
    hamburger.classList.remove('fa-xmark');
    hamburger.classList.add('fa-bars');
    body.classList.remove('no-scroll');
});

document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('fa-xmark');
        hamburger.classList.add('fa-bars');
        body.classList.remove('no-scroll');
    }
});