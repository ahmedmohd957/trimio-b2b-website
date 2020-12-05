const navHandler = () => {
    const burger = document.querySelector('.burger');
    const nav_menu = document.querySelector('.nav-menu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-menu__item');
    const navBtn = document.querySelector('.nav-btn-anim');
    // Nav Links
    const featuresLink = document.querySelector('.features-link');
    const pricingLink = document.querySelector('.pricing-link');
    const faqLink = document.querySelector('.faq-link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav_menu.classList.toggle('nav-active');
        body.classList.toggle('nav-active-overflow-y-hidden');

        for (i = 0; i <= (navLinks.length + 1); i++) {
            if (i === navLinks.length) {
                navBtn.style.animation = `navLinkFade 0.5s ease forwards ${i / 10}s`;
                return
            }

            if (navLinks[i].style.animation) {
                navLinks[i].style.animation = '';
            } else {
                navLinks[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 10}s`;
            }
        }
    });

    const close = () => {
        burger.classList.remove('toggle');
        nav_menu.classList.remove('nav-active');
        body.classList.remove('nav-active-overflow-y-hidden');

        navLinks.forEach((link) => {
            link.style.animation = '';
        });
    }

    const scrollTo = (section) => {
        setTimeout(function() {
            document.getElementById(section).scrollIntoView({
                behavior: 'smooth'
            });
        }, 0);
    }

    featuresLink.addEventListener('click', () => {
        close();
        scrollTo('features');
    });

    pricingLink.addEventListener('click', () => {
        close();
        scrollTo('pricing');
    });

    faqLink.addEventListener('click', () => {
        close();
        scrollTo('faq');
    });
}

navHandler();
/* END ---- NAV */


/* COOKIES */
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
/* END ---- COOKIES */