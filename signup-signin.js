let password = document.querySelector("#password");
let btn = document.querySelector("#Show");

let clicked = 0;
btn.addEventListener("click", () => {
  if (clicked === 0) {
    password.type = "text";
    clicked = 1;
    btn.innerText = "Hide";
  } else {
    password.type = "password";
    clicked = 0;
    btn.innerText = "Show";
  }
});
