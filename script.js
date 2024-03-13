const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('.nav__list-mobile')
    
hamburger.addEventListener("click", () => {
    navlist.classList.toggle("active");
})

document.querySelectorAll('.mobile__link').forEach(n => n.
    addEventListener("click", () => {
        navlist.classList.remove("active");
    }))