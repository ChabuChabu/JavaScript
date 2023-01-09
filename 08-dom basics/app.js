const title = document.getElementById('title')

console.log(`Before:: ${title.innerText}`); //reading inner text
let message = 'Goodbye my lover '

title.innerText = message 

console.log(`After:: ${title.innerText}`);
title.innerHTML = `<p>${message}</p>`  //chanhing inner html

title.style.color = 'red'; //changing color