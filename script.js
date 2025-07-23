document.querySelectorAll(".accordian").forEach((box) => {
    const header = box.querySelector(".header");
    const answer = box.querySelector(".answer");
  
    header.addEventListener("click", () => {
    answer.classList.toggle("see");
  });
});

let getStarted = document.querySelector(".getStarted");
let input1 = document.querySelector("#input1");

getStarted.addEventListener('click', () => {
  input1.value = "";
})

