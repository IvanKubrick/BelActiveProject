(function () {
    const certificatesWrapper = document.querySelector('.licenses');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal__img');
    const closeBtn = document.querySelector('.modal__close');

    certificatesWrapper.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName !== 'IMG') {
            return;
        } else {
            let img = event.target;
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modal.classList.add('modal--open');
        }
    });

    closeBtn.addEventListener('click', () => modal.classList.remove('modal--open'));
    document.documentElement.addEventListener('keydown', (event) => {
        if (modal.classList.contains('modal--open')) {
            modal.classList.remove('modal--open');
        }
    });
})();
