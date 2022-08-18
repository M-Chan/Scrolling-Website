
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const page1Button = document.getElementById("p1_nav");
const page2Button = document.getElementById("p2_nav");
const page3Button = document.getElementById("p3_nav");


page1Button.addEventListener('click', goto_page1);
page2Button.addEventListener('click', goto_page2);
page3Button.addEventListener('click', goto_page3);


function goto_page1() {
    console.log("Going to Page 1");

    page1.classList.remove("desktop--only");
    page2.classList.add("desktop--only");
    page3.classList.add("desktop--only");
}

function goto_page2() {
    console.log("Going to Page 2")

    page2.classList.remove("desktop--only");
    page3.classList.add("desktop--only");
    page1.classList.add("desktop--only");
}

function goto_page3() {
    console.log("Going to Page 3")
    
    page3.classList.remove("desktop--only");
    page1.classList.add("desktop--only");
    page2.classList.add("desktop--only");
}