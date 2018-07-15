(function () {
    const certificatesWrapper = document.querySelector('.licences__wrapper');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal__img');
    const closeBtn = document.querySelector('.modal__close');

    certificatesWrapper.addEventListener('click', (event) => {
        console.log(event)

        if (!event.target.classList.contains('licenses__block')) {
            return;
        } else {
            let img = event.target.children[0];
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
