var mobileNavSection = document.getElementById('mobileNav');

function mobileNav() {
    if (mobileNavSection.style.display == "none") {
        mobileNavSection.style.display = "unset";
    } else {
        mobileNavSection.style.display = "none";
    }
}