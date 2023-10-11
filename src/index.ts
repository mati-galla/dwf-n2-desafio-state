import { initListCE } from "./components/list";
import { initItemInputCE } from "./components/item-input";

function addItem(newItem) {
  const listCE = document.querySelector("list-ce");
  const list = listCE.shadowRoot.querySelector("ul");
  const newLI = document.createElement("li");
  newLI.innerHTML = `
  <label>
          <input type="checkbox" />
          <div>X</div>
          <span>${newItem}</span>
        </label>
  `;
  list.appendChild(newLI);
  console.log(list);
}

function handleEvents() {
  const itemInputCE = document.querySelector("item-input-ce");
  const itemInput =
    itemInputCE.shadowRoot.querySelector<HTMLInputElement>("#item-input");
  const addButton = itemInputCE.shadowRoot.getElementById("add-button");
  addButton?.addEventListener("click", () => {
    console.log(itemInput.value);
    const newItem = itemInput.value;
    if (newItem != "") {
      addItem(newItem);
    }
  });
}

(function () {
  initListCE();
  initItemInputCE();

  handleEvents();
})();
