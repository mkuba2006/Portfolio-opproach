let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("mp");
      console.log(button);
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("mp");
      console.log(button);
    });
  });
  

