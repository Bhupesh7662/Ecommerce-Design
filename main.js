window.onscroll = function () {
    StickyNav()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
// For sticky nav bar
function StickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}