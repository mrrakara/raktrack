// Navbar
let nav = document.querySelector(".side-nav-bar");
let menuIcon = document.querySelector("#menu-icon");
let menuBox = document.getElementById("menu-box");
nav.style.transform = "translateX(0%)";
menuBox.style.backgroundColor = "white";

// importing main-container to change width according to the sidenav
let mainContainer = document.getElementById("main-container");


const navToggle = () => {
    if (nav.style.transform == "translateX(0%)") {
        nav.style.transform = "translateX(-100%)";
        nav.style.transition = "1s";
        menuIcon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/54/54900.png");
        menuBox.style.backgroundColor = "#66E3E4";
        mainContainer.style.width = "calc(100% - 20px)";
        mainContainer.style.paddingLeft = "50px";
        mainContainer.style.transition = "1s";
        
    } else {
        nav.style.transform = "translateX(0%)";
        nav.style.transition = "1s";
        menuIcon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/54/54782.png");
        menuBox.style.backgroundColor = "white";
        mainContainer.style.width = "calc( 100% - 260px)";
    }
}

