let show = true

const menu =  document.querySelector(".menu")
const menuBarras = menu.querySelector(".menuBarras")

menuBarras.addEventListener("click", () => {
    menu.classList.toggle("on", show)
    show = !show
})