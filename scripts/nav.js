// const nav = document.querySelector('#nav');

// const scroll = () =>{
//     const scrollPos = window.scrollY;
//     nav.classList.toggle("scroll-down", scrollPos > 56 );
// };
// document.addEventListener('scroll', scroll,{passive: true});



// const navl = document.querySelector("#nav > div:nth-child(2)");
// const nav_links = navl.querySelectorAll('a');
// const burger = document.querySelector("#burger");

// burger.addEventListener("click", () => {
//   burger.classList.toggle("toggle");
//   navl.classList.toggle("nav_active");
//   nav_links.forEach((link, index) => {
//     link.style.animation = `navLink 0.5s ease forwards ${index / 7}s`;
//   });
// });







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
});

