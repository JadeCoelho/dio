class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const s = this.attachShadow({ mode: "open" });

    //html
    const title = document.createElement("h3");
    // title.textContent = "Guelisson";
    title.textContent = this.getAttribute('titulo')
    //styles
    const style = document.createElement("style");
    style.textContent = `h3 { color: red;}`;
    //envio
    s.appendChild(title)
    s.appendChild(style)
  }
}
customElements.define("titulo-dinamico", TituloDinamico);
