
const dekrBtn = document.querySelector('#counter').firstElementChild;
const inkrBtn = document.querySelector('#counter').lastElementChild;

let valueEl = 0;
let counterValue = document.querySelector('#value');

inkrBtn.addEventListener('click', event => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener('click', event => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});