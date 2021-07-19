require('./bootstrap');

const tabs = document.querySelector('.challenge-projects__tabs');
const tabsButtons = tabs.querySelectorAll('.challenge-projects__tab');
const boxes = document.querySelector('.challenge-projects__boxes');
const tabsBoxes = boxes.querySelectorAll('.challenge-projects__box');

function displayCurrentTab(current) {
    for (let i = 0; i < tabsBoxes.length; i++) {
        if (current === i) {
            tabsBoxes[i].style.display = 'block';
            tabsButtons.forEach((element) => {
                element.classList.remove('challenge-projects__tab--active');
            });
            tabsButtons[i].classList.add('challenge-projects__tab--active');
        } else {
            tabsBoxes[i].style.display = 'none';
        }
    }
}

displayCurrentTab(0);

tabs.addEventListener('click', event => {
    if (event.target.className === 'challenge-projects__tab') {
        for (let i = 0; i < tabsButtons.length; i++) {
            if (event.target === tabsButtons[i]) {
                displayCurrentTab(i);
                break;
            }
        }
    }
});
