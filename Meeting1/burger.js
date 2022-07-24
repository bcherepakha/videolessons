class Burger {
    constructor({burgerSelector, navSelector, navToggledClass, burgerToggleClass}) {
        this.burgerBtn = document.querySelector(burgerSelector);
        this.navEl = document.querySelector(navSelector);

        const toggleMenu = () => {
            this.navEl.classList.toggle(navToggledClass);
            this.burgerBtn.classList.toggle(burgerToggleClass);
        };

        this.burgerBtn.addEventListener('click', toggleMenu);

        window.addEventListener('click', (e) => {
            console.log({
                target: e.target,
                currentTarget: e.currentTarget
            });

            if (this.navEl.classList.contains(navToggledClass)) {
                const navEl = e.target.closest(navSelector);
                const burgerEl = e.target.closest(burgerSelector);

                if (!navEl && !burgerEl) {
                    toggleMenu();
                }
            }
        });
    }
}

new Burger({
    burgerSelector: '.header__burger',
    navSelector: '.header__nav',
    navToggledClass: 'header__nav--open',
    burgerToggleClass: 'header__burger--open',
});
