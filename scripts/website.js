let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("mp");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("mp");
    });
  });

  ScrollReveal().reveal('#one',{origin: 'left', distance: '30%'});
  ScrollReveal().reveal('.two a', {delay: 500, origin: 'left', distance: '130%', interval: 200});
  ScrollReveal().reveal('.two a button', {delay: 500, origin: 'left', distance: '30%', interval: 200});

  ScrollReveal().reveal('.addon .n', { origin: 'bottom', interval: 200});
  ScrollReveal().reveal('#dos div', { delay: 200, origin: 'left', distance: '30%', interval: 200});

  ScrollReveal().reveal('#opis h3', { delay: 200, origin: 'left', distance: '30%'});
  ScrollReveal().reveal('#opis h1', { delay: 400, origin: 'left', distance: '30%'});
  ScrollReveal().reveal('#opis #buttons', { delay: 600, origin: 'left', distance: '30%'});

  ScrollReveal().reveal('#opis #buttons button', { delay: 200, origin: 'left', distance: '20%', interval: 500});
  
  
  const dos = document.getElementById("dos");
  const dos_el = document.querySelectorAll("#dos div");

  const i = document.querySelectorAll("i");
  if (window.outerWidth < 1200 && window.outerWidth > 930) {
    dos.style.cssText = `height: 400px; padding: 80px 0px;`;
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px;`;
    });
  } else if (window.outerWidth < 920 && window.outerWidth > 600) {
    dos.style.cssText = `height: 200px; padding: 100px 0px; `;
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px; font-size: 15px;`;
    });
    i.forEach((i) => {
      i.style.cssText = `font-size: 100px;`;
    });
  } else if (window.outerWidth < 600) {
    dos.style.cssText = `display: grid; width: 100vw; height: auto; padding: 100px 0px; margin-bottom: 1000px; `;
    
    dos_el.forEach((el) => {
      el.style.cssText = `min-width: 200px;width: 50vw; font-size: 15px; height: auto;`;
    });
    i.forEach((i) => {
      i.style.cssText = `100px;`;
    });
    dos_el[0].style.paddingBottom = "70px";
    dos_el[1].style.paddingBottom = "70px";
  }

  console.log($('#dos'));