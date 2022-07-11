const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients');
const array = [];

ingredients.map(ingredient => { 
    let item = document.createElement('li');
    item.textContent = ingredient;
    item.classList.add('item');
    array.push(item);
})

listRef.append(...array)
console.log(listRef)