const nav = document.querySelector('#nav');

const scroll = () =>{
    const scrollPos = window.scrollY;
    nav.classList.toggle("scroll-down", scrollPos > 56 );

};
document.addEventListener('scroll', scroll,{passive: true});
