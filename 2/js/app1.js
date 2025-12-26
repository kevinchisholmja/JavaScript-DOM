const oneElement = document.getElementById('one');
oneElement.innerHTML='<h1>Test</h1>';
oneElement.innerHTML='<h1>New</h1>';
const output1 = document.getElementsByClassName('output');
console.log(output1);
for(let i = 0;i<output1.length;i++){
console.log(output1[i]);
output1[i].innerHTML=`<h1>Index :${i}</h1>`;
}
const divs = document.getElementsByTagName('div');
console.log(divs);
const el1 = document.querySelector('#one');
console.log(el1);
const el2= document.querySelector('.output');
console.log(el2);

const el3 = document.querySelector('h1');
console.log(el3);

const el1s = document.querySelectorAll('#one');
console.log(el1s);

const el2s = document.querySelectorAll('.output');
console.log(el2s);

const el3s = document.querySelectorAll('div');
console.log(el3s);

for(let i=0;i<el3s.length;i++){
el3s[i].innerHTML=`<h1>Div :${i}</h1>`;
}

el3s.forEach((e,index)=>{
e.innerHTML=`<h2>ELE${index}</h2>`;
})
