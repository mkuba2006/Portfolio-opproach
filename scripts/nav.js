const nav = document.querySelector('#nav1');

const scroll = () =>{
    const scrollPos = window.scrollY;
    nav.classList.toggle("scroll-down", scrollPos > 56 );
};
document.addEventListener('scroll', scroll,{passive: true});



const navl = document.querySelector("#burger1")
const navi = document.querySelector("#secret")
const nav_links = navi.querySelectorAll('a');
const burger = document.querySelector("#burger1");
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navi.classList.toggle("nav_active");
  nav_links.forEach((link, index) => {
    link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
  });
  document.getElementById("jeden").style.transform ='rotate(-45deg) translate(-9px, 4px)';
  document.getElementById("dwa").style.opacity = '0';
  document.getElementById("trzy").style.transform = 'rotate(45deg) translate(-9px, -4px)';
});

const hrefs = document.querySelectorAll("#secret a");
const secretDiv = document.getElementById('secret');

hrefs.forEach(href=>{
  href.addEventListener('click', ()=>{
    secretDiv.classList.remove('nav_active');
    document.getElementById("jeden").style.transform ='rotate(0deg) translate(0px, 0px)';
    document.getElementById("dwa").style.opacity = '100';
    document.getElementById("trzy").style.transform = 'rotate(0deg) translate(0px, 0px)';
  })
})