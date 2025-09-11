'use strict';

const forma = document.querySelector('.login-form');

forma.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const pass = form.elements.password.value.trim();

  if (email === '' || pass === '') {
    alert('All form fields must be filled in');
  } else {
    const user = {
      email: email,
      password: pass,
    };
    form.reset();
    console.log(user);
  }
});
