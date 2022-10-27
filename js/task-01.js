const listEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((element) => {
  const titleEl = element.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`);
  const listLengthEl = element.querySelectorAll("li");
  console.log(`Elements: ${listLengthEl.length}`);
});
