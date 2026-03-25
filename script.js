// كود المنيو (شغال تمام وما يحتاج تغيير)
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

emailjs.init("yVHZC-2io8HMIAqN3");
document.addEventListener('DOMContentLoaded', function() {


    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = event.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'جاري الإرسال...';
            btn.disabled = true;

            emailjs.sendForm('service_x94jgnq', 'template_cuj2dht', this)

            .then(function() {
                const status = document.getElementById('form-status');
                status.innerText = '✅ تم الإرسال بنجاح! شكراً لتواصلك.';
                status.style.color = '#27ae60';

                btn.innerText = originalText;
                btn.disabled = false;
                contactForm.reset();

                setTimeout(() => { status.innerText = ''; }, 5000);

            }, function(error) {
                const status = document.getElementById('form-status');
                status.innerText = '❌ نعتذر، حدث خطأ. حاول مرة أخرى.';
                status.style.color = '#e74c3c';

                btn.innerText = originalText;
                btn.disabled = false;
            });
        });
    }
});