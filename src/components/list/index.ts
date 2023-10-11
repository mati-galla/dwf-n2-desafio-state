const createID = (str) => {
  const sinTildes = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return sinTildes.toLowerCase().replace(" ", "-");
};

export function initListCE() {
  class ListCE extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const listItems: string[] = [];
      for (const child of this.children) {
        if (typeof child.textContent == "string") {
          listItems.push(child.textContent);
        }
      }
      this.innerHTML = "";

      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
      .root {
        width: 300px;
        min-height: 600px;
        height: fit-content;
        margin: 20px;
        border: 2px solid black;
        padding: 20px;
        background-color: salmon;
      }
      
      .root ul {
        list-style: none;
        padding: 0 20px 0 0;
      }
      
      .root li {
        margin-bottom: 15px;
        border-bottom: 2px solid black;
      }
      
      .root label {
        width: 100%;
        height:100%;
        padding-top: 10px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      
      .root input {
        display: none;
      }
      
      .root input + div {
        content-visibility: hidden;
      }
      
      .root input:checked + div {
        content-visibility: visible;
      }
      
      .root div {
        width: 20px;
        height: 20px;
        margin-right: 15px;
        border: solid 1px black;
        border-radius: 0;
        text-align: center;
        font-family: sans-serif;
      }
      
      .root span {
        font-size: 20px;
      }
      `;
      shadow.appendChild(style);

      var container = document.createElement("div");
      container.classList.add("root");

      var list = document.createElement("ul");
      listItems.forEach((e) => {
        var li = document.createElement("li");
        li.innerHTML = `
        <label>
          <input type="checkbox" />
          <div>X</div>
          <span>${e}</span>
        </label>
        `;
        li.id = createID(e);
        list.appendChild(li);
      });

      container.appendChild(list);
      shadow.appendChild(container);
    }
  }
  customElements.define("list-ce", ListCE);
}
