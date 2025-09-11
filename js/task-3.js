'use strict';

const input = document.querySelector('.name');
let name = document.querySelector('#name-output');

input.addEventListener('input', outName);

function outName(event) {
  const user = event.currentTarget.value;
  const outUser = user.trim();
  if (outUser === '') {
    name.textContent = 'Anonymous';
  } else {
    name.textContent = outUser;
  }
}
