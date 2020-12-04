const showNav = () => {
    const burger = document.querySelector('.burger');
    const nav_menu = document.querySelector('.nav-menu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-menu__item');
    const navBtn = document.querySelector('.nav-btn-anim');


    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav_menu.classList.toggle('nav-activate');
        body.classList.toggle('nav-activate-overflow-y-hidden');

        for (i = 0; i <= (navLinks.length + 1); i++) {
            console.log(i);
            if (i === navLinks.length) {
                navBtn.style.animation = `navLinkFade 0.5s ease forwards ${i / 10}s`;
                return
            }

            const link = navLinks[i];
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${i / 10}s`;
            }
        }

        // navLinks.forEach((link, index) => {
        //     if (link.style.animation) {
        //         link.style.animation = '';
        //     } else {
        //         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10}s`;
        //     }
        // });
    });
}
showNav();