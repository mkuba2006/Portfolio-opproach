let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("mp");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("mp");
    });
  });

 
  
  const dos = document.getElementById("dos");
  const dos_el = document.querySelectorAll("#dos div");

  const i = document.querySelectorAll("#dos i");
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

function func() {
  const bubble = document.querySelector("#opis > h1:nth-child(3) > span > div > p");
  // const Data = new Date('September 10, 2021 10:00:00');
  const Data = new Date('October 5, 2007 01:00:00');
  let tDay = new Date();
  var crok = tDay.getFullYear() - Data.getFullYear();
  var cdni =  tDay.getDay() - Data.getDay();
  cdni = Math.floor(cdni/(1000*60*60*24)) +1;
  var cgodz = tDay.getHours() - Data.getHours();
  var cmin = tDay.getMinutes() - Data.getMinutes();
  var csek = tDay.getSeconds() - Data.getSeconds();
  var cmilsek = tDay.getMilliseconds() - Data.getMilliseconds();
  bubble.textContent = `${crok}.${cdni}${cgodz}${cmin}${csek}${cmilsek}`;
  setTimeout(func, 10);
}
func();

