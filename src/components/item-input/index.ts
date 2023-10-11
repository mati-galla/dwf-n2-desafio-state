export function initItemInputCE() {
  class ItemInputCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        height: 60px;
        width: 300px;
        border: 2px solid black;
        padding: 13px 10px;
        background-color: turquoise;
        display: grid;
        grid-template-columns: 1fr 45px;
        gap: 10px;
      }
      
      .root input {
        height: 100%;
        border: 2px solid black;
        border-radius: 0;
        padding-left: 7px;
        background-color: inherit;
        font-size: 18px;
      }
      
      .root button {
        height: 100%;
        width: 40px;
        border: 2px solid black;
        border-radius: 0;
        padding: 0;
        background-color: inherit;
        font-size: 24px;
        font-weight: bold;
      }      
      `;

      var div = document.createElement("div");
      div.classList.add("root");

      var textInput = document.createElement("input");
      textInput.type = "text";
      textInput.id = "item-input";
      textInput.placeholder = "nuevo pendiente |";
      div.appendChild(textInput);

      var addButton = document.createElement("button");
      addButton.innerHTML = "+";
      addButton.id = "add-button";
      div.appendChild(addButton);

      shadow.appendChild(div);
    }
  }
  customElements.define("item-input-ce", ItemInputCE);
}
