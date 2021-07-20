const accordionItems = document.querySelectorAll('.challenge-projects__item');
const accordionContentPanes = document.querySelectorAll('.challenge-projects__item-content');

// Show first by default
accordionItems[0].classList.add('challenge-projects__item--active');

// Hide each besides the targeted accordion on click
accordionItems.forEach(function(accordion) {
    // Clicked accordions clickable target
    const accordionTitleRow = accordion.firstElementChild;
    accordionTitleRow.addEventListener('click', toggleAccordion);
});

function toggleAccordion(e) {
    accordionContentPanes.forEach(function(content) {
        // Check if the clicked row matches the content's previous element sibling
        if (content.previousElementSibling === e.target) {
            content.parentElement.classList.add('challenge-projects__item--active');
        } else {
            content.parentElement.classList.remove('challenge-projects__item--active');
        }
    });
}
