var navRight = document.getElementById('sideNavRight');
var navLeft = document.getElementById('sideNavLeft');

function mobileNavRight() {
    if (navRight.style.width == "0px" || navRight.style.width == 0) {
        navRight.style.width = "140px";
    } else {
        navRight.style.width = "0px";
    }
}

function mobileNavLeft() {
    if (navLeft.style.width == "0px" || navRight.style.width == 0) {
        navLeft.style.width = "140px";
        navLeft.style.opacity = "1";
    } else {
        navLeft.style.opacity = "0";
        navLeft.style.width = "0px";
    }
}