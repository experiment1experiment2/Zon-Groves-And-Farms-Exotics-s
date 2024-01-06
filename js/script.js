// Navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');

navToggle.addEventListener('click', () => {
    navbar.classList.toggle('show-navbar');
});

// Login form toggle
const loginToggle = document.querySelector('.login-toggle');
const loginForm = document.querySelector('.login-form');

loginToggle.addEventListener('click', () => {
    loginForm.classList.toggle('show-login-form');
});

// Swiper for Gallery
const gallerySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Scroll reveal animation
ScrollReveal().reveal('.home h3, .home .btn', { delay: 300 });
ScrollReveal().reveal('.about h2, .about .image, .about .content', { delay: 300 });
ScrollReveal().reveal('.gallery .heading, .swiper-slide img', { delay: 300 });
ScrollReveal().reveal('.bird .heading, .bird .box', { delay: 300 });
ScrollReveal().reveal('.banner .heading, .banner .box', { delay: 300 });
ScrollReveal().reveal('.contact h2, .contact .row', { delay: 300 });
ScrollReveal().reveal('.footer .box, .footer .social', { delay: 300 });
