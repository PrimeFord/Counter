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
    } else if (parseInt(display.textContent) < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "rgb(51 51 51)";
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
    } else if (parseInt(display.textContent) < 0) {
      display.style.color = "red";
    } else {
      display.style.color = "rgb(51 51 51)";
    }
  })
);
