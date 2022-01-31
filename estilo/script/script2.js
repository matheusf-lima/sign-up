document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('menu-toggle').classList.toggle('active')
    document.querySelector('nav').classList.toggle('active')
})

document.querySelector('li#a').addEventListener('mouseenter', () =>{
    document.querySelector('a').classList.toggle('active')
})



