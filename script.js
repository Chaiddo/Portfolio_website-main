function toggleMenu() {
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Get the button

let mybutton = document.getElementById("myBtn");

// When user scrolls down 20px from the top of
// the document, show the button

window.onscroll = function(){scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
}

// When the user click on the button,
//scroll to the top of the document 

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}