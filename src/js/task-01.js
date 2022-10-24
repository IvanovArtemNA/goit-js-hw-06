const itemsEl = document.querySelectorAll(".item"); // Ищем класс .item
console.log(`Number of categories: ${itemsEl.length}`); // Возвращаем сообщение

itemsEl.forEach((element) => {
  const titleEl = element.querySelector("h2");
  console.log(`Category: ${titleEl.textContent}`); // Возвращаем сообщение
  const listLengthEl = element.querySelectorAll("li");
  console.log(`Elements: ${listLengthEl.length}`); // Возвращаем сообщение
});
