// Select the button and body elements
let btn = document.querySelector(".btn");
let body = document.body;
let audio = document.querySelector("#audio");

// Add click event listener to the button
btn.addEventListener("click", () => {
  // Toggle the "on" class on the body element
  body.classList.toggle("on");

  // Play the audio
  audio.play();
});







// let btn = document.querySelector(".btn");
// let body = document.body;
// let audio = document.querySelector("#audio");

// btn.addEventListener("click", () => {
//   body.classList.toggle("on");
//   audio.play();
// });
