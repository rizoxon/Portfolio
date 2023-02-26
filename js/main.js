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