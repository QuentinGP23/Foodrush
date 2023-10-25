let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scroll vers le haut
        document.querySelector("header").style.top = "0";
    } else {
        // Scroll vers le bas
        document.querySelector("header").style.top = "-55px";
    }

    prevScrollPos = currentScrollPos;
};