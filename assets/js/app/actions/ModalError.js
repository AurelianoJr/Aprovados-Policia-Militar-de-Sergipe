export class ModalError {

    constructor() {
        this._$ = document.getElementById.bind(document);
        this._modal = this._$("alert");
        this._modalContainer = this._$("alert-container")
        this._init();
    }

    _init() {
        this._modal.addEventListener("click", (event) => this._modal == event.target || event.target.hasAttribute("data-fecha-modal") ? this._fechar() : false);
    }
    
    exibir(texto) {
        this._setTexto(texto);
        this._modal.classList.add("alert--ativo");
        this._modalContainer.focus();
    }

    _setTexto(texto) {
        this._modal.querySelector("p").innerText = texto;
    }

    _fechar() {
        this._modal.classList.remove("alert--ativo");
    }
}
