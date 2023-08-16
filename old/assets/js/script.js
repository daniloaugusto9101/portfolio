const menu = document.querySelectorAll('.menu a[href^="#"]')
const btn = document.querySelector('.menu-mobile')
const navbar = document.querySelector('.nav-bar__container')

menu.forEach(item =>{
    item.addEventListener('click', toScroll)
    item.classList.remove('btn')
})

function toScroll(event){
    event.preventDefault();
    const element = event.target 
    const id = element.getAttribute('href');

    const section = document.querySelector(id)
    const to = section.offsetTop;

    window.scroll({
        top: to - 100,
        behavior: "smooth"
    })
}

btn.addEventListener('click', function(){
    navbar.classList.toggle('active')
})