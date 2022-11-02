const menu = document.querySelectorAll('.menu a[href^="#"]')

menu.forEach(item =>{
    item.addEventListener('click', toScroll)
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