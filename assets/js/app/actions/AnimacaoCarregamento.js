export class AnimacaoCarregamento {
  
    constructor() {
        this._html = document.querySelector("html");
    }

    adicionarAnimacao() {
        this._html.classList.add("body__load");
    }

    removerAnimacao() {
        this._html.classList.remove("body__load");
    }
}