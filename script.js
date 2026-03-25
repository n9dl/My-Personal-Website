
var menuIcon = document.getElementById('menu-icon');
var navMenu = document.getElementById('nav-menu');

menuIcon.onclick = function() {

    navMenu.classList.toggle('active');
}

var navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(function(link) {
    link.onclick = function() {
        navMenu.classList.remove('active');
    }
});