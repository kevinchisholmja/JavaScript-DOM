const ele1 = document.querySelector("h1");
const ele2 = document.querySelector(".output");
document.body.onload = () => {
  console.log("ready");
};
let counter = 0;
ele1.onclick = () => {
  adder("clicked");
};
ele1.onmousedown = () => {
  adder("mouse down");
};
ele1.onmouseup = () => {
  adder("mouse up");
};
ele1.onmouseover = () => {
  adder("mouse over");
};
ele1.onmouseout = () => {
  adder("mouse out");
};
ele2.onclick = output;
function adder(val) {
  counter++;
  console.log(val);
  ele2.textContent = `${val}click${counter}`;
}
function output() {
  counter++;
  ele2.textContent = `click${counter}`;
}
