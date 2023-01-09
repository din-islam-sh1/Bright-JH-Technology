let mobileNav = document.querySelector('.header-menu');


function openMobileNav() {
    mobileNav.style.width = '35%';
    mobileNav.style.height = '80%';
}

function closeMobileNav() {
    mobileNav.style.width = '0%';
    mobileNav.style.height = '0%';
}

function openNav() {
    document.getElementById("slider-menu").style.transform = "translateX(0%)";
}
  
function closeNav() {
    document.getElementById("slider-menu").style.transform = "translateX(-100%)";
    document.getElementById("hero-button").style.backgroundColor = "red"
}