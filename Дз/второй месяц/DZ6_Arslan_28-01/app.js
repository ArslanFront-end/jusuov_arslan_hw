const child_block = document.querySelectorAll(".child_block div");
const btn_start = document.querySelector("#btn_start");
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
btn_start.addEventListener("click", () => {
  child_block.forEach((farsh) => {
    const randomNum = getRandomInt(1, 99);
    farsh.innerHTML = randomNum.toString().padStart(2, "0");
  });
  
});

