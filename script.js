const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// //function refact
// function refact(
//   navColor,
//   textBoxColor,
//   toggleIconText,
//   remove,
//   add,
//   src1,
//   src2,
//   src3
// ) {
//   nav.style.backgroundColor = navColor;
//   textBox.style.backgroundColor = textBoxColor;
//   // console.log(toggleIcon.children);
//   toggleIcon.children[0].textContent = toggleIconText;
//   toggleIcon.children[1].classList.remove(remove);
//   toggleIcon.children[1].classList.add(add);
//   image1.src = src1;
//   image2.src = src2;
//   image3.src = src3;
// }

// function darkMode() {
//   refact(
//     "rgb(0 0 0 /50%)",
//     "rgb(255 255 255 / 50%)",
//     "Dark Mode",
//     "fa-sun",
//     "fa-moon",
//     "img/undraw_proud_coder_dark.svg",
//     "img/undraw_feeling_proud_dark.svg",
//     "img/undraw_dark_mode_dark.svg"
//   );
// }

// //Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = "rgb(0 0 0 /50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
//   console.log(toggleIcon.children);
//   toggleIcon.children[0].textContent = "Dark Mode";
//   toggleIcon.children[1].classList.remove("fa-sun");
//   toggleIcon.children[1].classList.add("fa-moon");
//   image1.src = "img/undraw_proud_coder_dark.svg";
//   image2.src = "img/undraw_feeling_proud_dark.svg";
//   image3.src = "img/undraw_dark_mode_dark.svg";
// }
// //Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = "rgb(255 255 255 /50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0 / 50%=";
//   console.log(toggleIcon.children);
//   toggleIcon.children[0].textContent = "Light Mode";
//   toggleIcon.children[1].classList.remove("fa-moon");
//   toggleIcon.children[1].classList.add("fa-sun");
//   image1.src = "img/undraw_proud_coder_light.svg";
//   image2.src = "img/undraw_feeling_proud_light.svg";
//   image3.src = "img/undraw_dark_mode_light.svg";
// }

//Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_proud_coder_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

//Dark Mode Styles
function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%)";
  console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Dark Mode";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  imageMode('dark');
}
//Light Mode Styles
function lightMode() {
  nav.style.backgroundColor = "rgb(255 255 255 /50%)";
  textBox.style.backgroundColor = "rgb(0 0 0 / 50%=";
  console.log(toggleIcon.children);
  toggleIcon.children[0].textContent = "Light Mode";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode("light");
}

//Switch Theme Dynamically
function switchTheme(event) {
  // console.log(event.target.checked)
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
  }
}

//Event Listener
toggleSwitch.addEventListener("change", switchTheme);
