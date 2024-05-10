const hamburger= document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const hLink = document.querySelectorAll("#hLink")

hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
    console.log("toggle working")
})

hLink.forEach(link=>{
    link.addEventListener("click",()=>{
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})