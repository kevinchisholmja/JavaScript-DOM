const output1 = document.querySelector(".output");
const output2 = document.createElement("div");
console.log(output1);
console.log(output2);
output1.innerHTML = "Test 1";
output2.innerHTML = "Test 2";

document.body.append(output2);
const res1 = output1.append(output2);
document.body.prepend(output2);

const res2 = output1.appendChild(output2);
console.log(res1);
console.log(res2);

output1.removeChild(output2);
console.log(output2);
output1.append(output2);

console.log(output2.parentNode);
output2.parentNode.removeChild(output2);

for (let i = 0; i < 10; i++) {
  const ele = document.createElement("div");
  ele.innerHTML = `Index${i}`;
  output1.append(ele);
}

/*
let html = ';
for(let i=0;i<10;i++){
html += `<div>HTML ${i}</div>`;
}
console.log(html);
output1.innerHTML = html;
*/
