const addEventListeners = (function () {
    const navToggleBtn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    navToggleBtn.addEventListener('click', () => {
        if (nav.classList.contains('nav-visible')) {
            nav.classList.remove('nav-visible');
            navToggleBtn.textContent = 'Open';
            navToggleBtn.classList.add('nav-toggle-open');
        } else {
            nav.classList.add('nav-visible');
            navToggleBtn.textContent = 'Close';
            navToggleBtn.classList.remove('nav-toggle-open');
        }
    });
})();

addEventListeners;
