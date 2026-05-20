const Upbtn = document.getElementById("increment-btn");
const Amount = document.getElementById("count-el");
const Save = document.getElementById("save-id");

let count = 0;
let lastCount = 0;

Upbtn.addEventListener("click", () => {
  count++;
  return (Amount.textContent = count);
});

function save() {
  let countStr = count + " - ";
  Amount.innerText = 0;
  Save.textContent += countStr;
  count = 0;
}
