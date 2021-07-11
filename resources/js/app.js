require('./bootstrap');

const tabs = document.querySelector('.tabs');
const tabsButtons = tabs.querySelectorAll('.tabs__tab');
const tabsContents = tabs.querySelectorAll('.tab__content');

function displayCurrentTab(current) {
    for (let i = 0; i < tabsContents.length; i++) {
        if (current === i) {
            tabsContents[i].style.display = 'block';
            tabsButtons.forEach((element) => {
                element.classList.remove('tabs__tab-active');
            });
            tabsButtons[i].classList.add('tabs__tab-active');
        } else {
            tabsContents[i].style.display = 'none';
        }
    }
}

displayCurrentTab(0);

tabs.addEventListener('click', event => {
    if (event.target.className === 'tabs__tab') {
        for (let i = 0; i < tabsButtons.length; i++) {
            if (event.target === tabsButtons[i]) {
                displayCurrentTab(i);
                break;
            }
        }
    }
});
