const el1 = document.querySelector("h2");
const el2 = document.querySelector(".output");
const el3 = document.querySelector("h1");
el2.textContent = "Click";
let temp = document.querySelector(".output");
for (let i = 0; i < 5; i++) {
  const ele = document.createElement("div");
  ele.classList.add("output");
  ele.textContent = `${i + 1}Element`;
  ele.id = `Ele${i}`;
  ele.style.height = 300 - i * 50 + "px";
  ele.style.width = 100 + i * 50 + "px";
  temp.append(ele);
  ele.addEventListener("click", () => {
    console.log(i);
  });
  temp = ele;
}
el1.addEventListener("click", output);

//el2.addEventListener('click',output);
el3.addEventListener("click", output);
function output(e) {
  console.log(e.target.id);
  //console.log(e.type);
}
/*
h2.addEventListener('click',(e)=>{
console.log(e.type);
});
*/
