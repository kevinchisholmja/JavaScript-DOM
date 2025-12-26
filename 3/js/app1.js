const eles = document.querySelectorAll('div.output');
console.log(eles);
eles.forEach((el,ind)=>{
el.innerHTML=`Index :${ind}`
;
});

