const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients"); // Ищем (указываем) место для добавления Lі

const elements = ingredients.map((ingredient) => {
  // map Поэлементно преберает оригинальный массив ingredients. Не изменяет оригинальный массив. Возвращает новый массив той же длинны. Можна сделать через for, но это устаревший способ
  const itemEl = document.createElement("li"); // Для каждой итерации указываем селектор, который хотим добавить
  itemEl.classList.add("item"); // Для каждой итерации добавляем класс для Li
  itemEl.textContent = ingredient; // Для каждой итерации добавляем значение для Li

  return itemEl; // Возвращаем элемент из map и получаем массив элементов
});

listEl.append(...elements); //append() - вставляет сразу несколько элементов за одну операцию. Операция SPREAD(...), заменяет concat и вставляет элементы массива elements в listEl (каждый отдельно)

console.log(elements);
