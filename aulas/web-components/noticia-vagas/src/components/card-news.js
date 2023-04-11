class Cardnews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build() {
    const cardRoot = document.createElement("div");
    const cardLeft = document.createElement("div");
    const cardRight = document.createElement("div");
    const autor = document.createElement("span");
    const titulo = document.createElement("a");
    const conteudo = document.createElement("p");
    const img = document.createElement("img");

    cardRoot.setAttribute("class", "card");
    cardRoot.appendChild(cardLeft);
    cardRoot.appendChild(cardRight);

    cardLeft.setAttribute("class", "card-left");
    cardLeft.appendChild(autor);
    cardLeft.appendChild(titulo);
    cardLeft.appendChild(conteudo);

    autor.textContent = `By ${this.getAttribute("autor") || "Anonymus"}`;
    titulo.textContent = this.getAttribute("titulo");
    conteudo.textContent = this.getAttribute("conteudo");
    titulo.href = this.getAttribute("url");

    cardRight.setAttribute("class", "card-right");
    cardRight.appendChild(img);

    img.src =
      this.getAttribute("src") ||
      "https://queridojeito.com/wp-content/uploads/2016/09/Autor-Desconhecido.jpg";

    return cardRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
        width: 720px;
        display: flex;
        -webkit-box-shadow: 3px 6px 22px -5px #707070a3;
        -moz-box-shadow: 3px 6px 22px -5px #707070a3;
        box-shadow: 3px 6px 22px -5px #707070a3;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-top: 15px;
      }
      
      .card-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .card-left span {
        font-weight: 300;
        color: #6e6e6e;
      }
      .card-left a {
        margin-top: 15px;
        font-size: 20px;
        color: #101010;
        font-weight: 600;
        text-decoration: none;

      }
      .card-left p {
        color: #6e6e6e;
      }
      
      img{
          width: 100%;
      }
      .card-right{
          width: 200px;
      }
    `;
    return style;
  }
}
customElements.define("card-news", Cardnews);
