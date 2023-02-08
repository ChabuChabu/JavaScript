const article = document.querySelector("article");

Array.from(article.children).forEach((child) => {
  child.classList.add("article-element");
});
