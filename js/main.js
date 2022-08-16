let headerBtn = document.querySelector(".header-part__btn")
let siteHeader = document.querySelector("#site-header")

headerBtn.addEventListener("click", ()=> {
    siteHeader.classList.toggle("site-nav-on")
})