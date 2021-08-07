const chevronRight = document.querySelector('.challenge-success__chevron--right');
const chevronLeft = document.querySelector('.challenge-success__chevron--left');
const sliderItems = document.querySelectorAll('.challenge-success__item');

const sliderTotal = sliderItems.length;
let sliderCount = 0;
let sliderPosition = 0;

chevronRight.addEventListener('click', function(e) {
    sliderCount++;
    sliderPosition = sliderCount * 20;

    if (sliderCount > 0) {
        chevronLeft.classList.remove('challenge-success__chevron--hide');
    }

    for (let i of sliderItems) {
        i.style.right = `-${sliderPosition}%`;

        if (sliderCount > 6) {
            chevronRight.classList.add('challenge-success__chevron--hide');
            sliderCount = 7;
        }
    }
});

chevronLeft.addEventListener('click', function(e) {
    sliderCount--;
    sliderPosition = sliderCount * 20;

    if (sliderCount > 0) {
        chevronRight.classList.remove('challenge-success__chevron--hide');
    }

    for (let i of sliderItems) {
        i.style.right = `-${sliderPosition}%`;

        if (sliderCount === 0) {
            chevronLeft.classList.add('challenge-success__chevron--hide');
        }

        if (sliderCount < 0) {
            sliderCount = 0;
        }
    }
});
