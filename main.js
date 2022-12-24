const display = document.querySelector(".display");
display.textContent = "0";
const sub = document.querySelector("#sub");
const add = document.querySelector("#add");

sub.addEventListener(
  "click",
  (subtract = () => {
    let init = parseInt(display.textContent);
    init--;
    display.textContent = init;
    if (parseInt(display.textContent) > 0) {
      display.style.color = "green";
    } else {
      display.style.color = "red";
    }
  })
);
add.addEventListener(
  "click",
  (addition = () => {
    let init = parseInt(display.textContent);
    init++;
    display.textContent = init;
    if (parseInt(display.textContent) > 0) {
      display.style.color = "green";
    } else {
      display.style.color = "red";
    }
  })
);
