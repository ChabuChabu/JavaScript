const ul = document.querySelector("ul");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "something new to do";
  //   ul.append(li);
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    // e.target.style.textDecoration = "line-through";
    e.target.remove();
  });
});
