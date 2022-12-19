const groceries = ['banana','orange','apple','pea']
console.log(groceries);

//array push adds items at the end of the array
groceries.push('cookie')
groceries.push('blueberry')
console.log(groceries);

//slices gets you a section indexes in an array

console.log(groceries.slice(0, 2));
console.log(groceries.slice(3,6));

//indexOf returns the index position of an array element
console.log(groceries.indexOf('apple'));

//array length returns the size of array

console.log(groceries.length);
