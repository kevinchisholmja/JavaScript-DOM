const main = document.querySelector(".output");

for (let i = 0; i < 10; i++) {
  const ele = document.createElement("div");
  ele.textContent = `Ele${i}`;
  ele.classList.add("box");
  ele.style.display = "inline-block";
  ele.style.border = "1px solid #eee";
  ele.style.width = "100px";
  ele.style.fontFamily = "Arial";
  main.append(ele);
}
const eles = document.querySelectorAll(".box");
console.log(eles);
eles[0].style.color = "red";
eles[1].style.border = "1px solid #ddd";
eles[2].style.display = "none";
eles[3].style.padding = "10px";
eles[4].style.margin = "10px";
eles[5].style.width = "200px";
eles[6].style.textAlign = "right";
eles[7].style.backgroundColor = "yellow";
