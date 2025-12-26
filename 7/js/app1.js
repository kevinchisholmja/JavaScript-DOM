const ele3 = document.querySelector("h2");
let counter = 0;

ele3.onclick = adder1;
ele3.onmousedown = adder1;
ele3.onmouseup = adder1;
function adder1(e) {
  counter++;
  console.log(e.type);
  e.target.textContent = `Event Type :${e.type}${counter}`;
}
const h2 = document.querySelector("h2");
h2.onclick = () => {
  console.log("click 1");
};
h2.onclick = () => {
  console.log("click 2");
};
h2.addEventListener("click", () => {
  console.log("click 3");
});
h2.addEventListener("click", () => {
  console.log("click 4");
});
