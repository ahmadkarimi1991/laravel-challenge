const meetingTabs = document.querySelector(".challenge-meetings__tabs");
const meetingTabsButtons = meetingTabs.querySelectorAll(".challenge-meetings__tab");
const meetingBoxes = document.querySelector(".challenge-meetings__boxes");
const meetingTabsBoxes = meetingBoxes.querySelectorAll(".challenge-meetings__box");

function displayMeetingTab(current) {
    for (let i = 0; i < meetingTabsBoxes.length; i++) {
        if (current === i) {
            meetingTabsBoxes[i].style.display = "block";
            meetingTabsButtons.forEach((element) => {
                element.classList.remove("challenge-meetings__tab--active");
            });
            meetingTabsButtons[i].classList.add("challenge-meetings__tab--active");
        } else {
            meetingTabsBoxes[i].style.display = "none";
        }
    }
}

displayMeetingTab(0);

meetingTabs.addEventListener("click", (event) => {
    if (event.target.className === "challenge-meetings__tab") {
        for (let i = 0; i < meetingTabsButtons.length; i++) {
            if (event.target === meetingTabsButtons[i]) {
                displayMeetingTab(i);
                break;
            }
        }
    }
});
