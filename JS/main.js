const menuIcon = document.getElementById("menu-icon")
const menuDropdown = document.getElementById("menu-dropdown")
let menuListener = 0;
menuIcon.addEventListener("click", () => {
    if(menuListener % 2 == 0){
        menuDropdown.style.opacity = 1
        document.getElementsByTagName('html')[0].style.overflow = "hidden";
        menuIcon.src = "images/icon-close.svg"
        menuListener++
    }else{
        menuDropdown.style.opacity = 0
        document.getElementsByTagName('html')[0].style.overflowY = "scroll";
        menuIcon.src = "images/icon-hamburger.svg"
        menuListener--
    }
})