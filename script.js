const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    
});

document.addEventListener('DOMContentLoaded', function () {
    const name = "hi, i'm tasnim!";
    const nameElement = document.getElementById('typing-animation');
    let i = 0;

    function type() {
        if (i <= name.length) {
            nameElement.textContent = name.slice(0, i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});