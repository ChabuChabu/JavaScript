const para = document.querySelector("div.error");

console.log(para);

const paras = document.querySelectorAll("p");
const errors = document.querySelectorAll(".error");

console.log(paras);

paras.forEach((para) => {
  console.log(para);
});

errors.forEach((error) => {
  console.log(error);
});
