// 1
const redElements = document.querySelectorAll('.red');
redElements.forEach(element => {
    element.classList.remove('red');
    element.classList.add('blue');
});
// 2
const refrains = document.querySelectorAll('.refrain');
refrains.forEach(refrain => {
    refrain.style.fontStyle = 'italic';
});
// 3
let blueElements = document.querySelectorAll('.blue');
blueElements.forEach(element => {
  element.style.backgroundColor = '#6495ED';
});
// 4
const para = document.querySelectorAll('p')               
for(let i =0; i<para.length; i++){
    para[i].style.margin = 0;
}
