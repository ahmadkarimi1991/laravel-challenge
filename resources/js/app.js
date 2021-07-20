require("./bootstrap");

const tabs = document.querySelector(".challenge-projects__tabs");
const tabsButtons = tabs.querySelectorAll(".challenge-projects__tab");
const boxes = document.querySelector(".challenge-projects__boxes");
const tabsBoxes = boxes.querySelectorAll(".challenge-projects__box");

function displayCurrentTab(current) {
    for (let i = 0; i < tabsBoxes.length; i++) {
        if (current === i) {
            tabsBoxes[i].style.display = "block";
            tabsButtons.forEach((element) => {
                element.classList.remove("challenge-projects__tab--active");
            });
            tabsButtons[i].classList.add("challenge-projects__tab--active");
        } else {
            tabsBoxes[i].style.display = "none";
        }
    }
}

displayCurrentTab(0);

tabs.addEventListener("click", (event) => {
    if (event.target.className === "challenge-projects__tab") {
        for (let i = 0; i < tabsButtons.length; i++) {
            if (event.target === tabsButtons[i]) {
                displayCurrentTab(i);
                break;
            }
        }
    }
});

// Custom Select
let x, i, j, l, ll, selElmnt, a, b, c;

/*look for any elements with the class "challenge-form__select":*/
x = document.getElementsByClassName("challenge-form__select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "challenge-form__select--selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute(
        "class",
        "challenge-form__select-items challenge-form__select--hide"
    );
    for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            let y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName(
                        "challenge-form__select--same-as-selected"
                    );
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute(
                        "class",
                        "challenge-form__select--same-as-selected"
                    );
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("challenge-form__select--hide");
        this.classList.toggle("challenge-form__select--active");
    });
}
function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    let x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
    x = document.getElementsByClassName("challenge-form__select-items");
    y = document.getElementsByClassName("challenge-form__select--selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i);
        } else {
            y[i].classList.remove("challenge-form__select--active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("challenge-form__select--hide");
        }
    }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
