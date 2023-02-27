'use strict'
//////////////////////////// Navbar Scroll
let lastScrollTop = 0
let navbar = document.querySelector('nav')
window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > lastScrollTop){
        navbar.style.top = '-80px'
    }else{
        navbar.style.top = '0'
    }
    lastScrollTop = scrollTop
})


//////////////////////////// Cursor
const cursor = document.querySelector('body > .cursor')

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px'
    cursor.style.top = e.pageY + 'px'
})

document.addEventListener('click', () => {
    cursor.classList.add('cursor-expand')
    setTimeout(() => {
        cursor.classList.remove('cursor-expand')
    }, 500)
})