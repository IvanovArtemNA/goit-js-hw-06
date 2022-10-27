const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.classList.add("item");
  ingredientsItemEl.textContent = ingredient;

  return ingredientsItemEl;
});
ingredientsListEl.append(...elements);
console.log(elements);
