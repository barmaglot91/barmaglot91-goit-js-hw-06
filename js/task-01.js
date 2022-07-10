const list = document.querySelectorAll('li.item');

console.log(`В списку ${list.length} категорії.`);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {console.log(`Категорія: ${el.firstElementChild.textContent}, Кількість елементів: ${el.lastElementChild.children.length}`,
  );
});