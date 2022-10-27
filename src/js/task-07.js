const sizeControlEl = document.querySelector("#font-size-control");
const textSizeEl = document.querySelector("#text");
sizeControlEl.addEventListener("input", (event) => {
  textSizeEl.style.fontSize = `${event.currentTarget.value}px`;
});
