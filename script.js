// MENU TOGGLE FUNCTION
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const openMenu = document.querySelector('.open-menu');
const menu_items = document.querySelectorAll('nav .nav-links li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    navLinks.style.display = 'flex';
    navLinks.style.top = '0';
}
function close(){
    navLinks.style.top = '-100%';
}

// Header effect upon scrolling

document.addEventListener('scroll', () =>{
    const nav = document.querySelector('nav');
    if(window.scrollY > 0){
        nav.classList.add('scrolled');
    }
    else{
        nav.classList.remove('scrolled');
    }


})

