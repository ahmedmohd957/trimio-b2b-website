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
    });
}

showNav();

// Cookies
const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value};`
    }
}

const storageType = cookieStorage;
const consentPropertyName = 'trim_cookies_consent';
const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
    const consentPopup = document.querySelector('.cookies_popup');
    const acceptBtn = document.querySelector('.cookies_popup-btn');
    acceptBtn.addEventListener('click', () => {
        saveToStorage(storageType);
        consentPopup.classList.add('hidden');
    });

    if (shouldShowPopup(storageType)) {
        setTimeout(() => {
            consentPopup.classList.remove('hidden');
        }, 2000);
    }
};