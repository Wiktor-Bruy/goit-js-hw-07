'use strict';

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((elem, index) => {
  const title = elem.querySelector('h2');
  const text = title.textContent;
  console.log(`Category: ${text}`);
  const item = elem.querySelectorAll('li');
  console.log(`Elements: ${item.length}`);
});
