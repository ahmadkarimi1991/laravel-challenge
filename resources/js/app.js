require('./bootstrap');

const tabs = document.querySelector('.challenge-projects__tabs');
const tabsButtons = tabs.querySelectorAll('.challenge-projects__tab');
const tabsContents = tabs.querySelectorAll('.challenge-projects__tab-content');

function displayCurrentTab(current) {
    for (let i = 0; i < tabsContents.length; i++) {
        if (current === i) {
            tabsContents[i].style.display = 'block';
            tabsButtons.forEach((element) => {
                element.classList.remove('is-active');
            });
            tabsButtons[i].classList.add('is-active');
        } else {
            tabsContents[i].style.display = 'none';
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
