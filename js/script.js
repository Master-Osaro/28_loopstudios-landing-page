let mobile_nav = document.querySelector(".nav-list__wrapper");
let mobile_menu_icon = document.querySelector(".nav-mobile__menu");
let toggled_on = false;

mobile_menu_icon.addEventListener("click", function(e) {
    toggleMobileNav(toggled_on);
})

function openedMobileMenu() {
    mobile_nav.style.display = "block";
    mobile_menu_icon.src="../images/icon-close.svg";
}
function closedMobileMenu() {
    mobile_nav.style.display = "none";
    mobile_menu_icon.src="../images/icon-hamburger.svg";
}

function checkScreenSize(toggleOnParams) {
    if (toggleOnParams==true) {
        if (document.body.clientWidth > 772) {
            openedMobileMenu();
        }
        else{
            openedMobileMenu();
        }
    }
     else {
        if(document.body.clientWidth > 772){
            openedMobileMenu();
        }else{
            closedMobileMenu();
        }
    }
}

function toggleMobileNav(toggledOnParams) {
    if (toggledOnParams == false) {
        checkScreenSize(true);
        toggled_on = true;
    } else if (toggledOnParams == true) {
        checkScreenSize(false);
       toggled_on = false;
    }
}

//on screen resize ensure nav state is still preserved
//use document.body.clientWidth instead of screen.width
window.addEventListener("resize", function(event) {
    checkScreenSize(toggled_on);
})

