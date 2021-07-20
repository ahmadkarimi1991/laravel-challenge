const acc = document.querySelectorAll('.challenge-projects__item');

acc.forEach((element) => {
    element.addEventListener('click', function(event) {
        if (event.target.className === 'challenge-projects__item-title') {
            if (element.classList.contains('challenge-projects__item--active')) {
                element.classList.remove('challenge-projects__item--active');
            } else {
                let thereIsAnActiveItem = document.querySelector('.challenge-projects__item--active') !== null;
                if (thereIsAnActiveItem) {
                    let activeItem = document.querySelector('.challenge-projects__item--active');
                    activeItem.classList.remove('challenge-projects__item--active');
                }
                element.classList.add('challenge-projects__item--active');
            }
        }
    });
});
