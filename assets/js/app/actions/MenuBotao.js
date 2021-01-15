export class MenuBotao {

    constructor() {
        const $ = document.getElementById.bind(document);
        this._maiorTamanhoMobile = 900;
        this._botaoMenuInput = $("botao-menu-input");
        this._botaoMenuLabel = $("botao-menu-label");
        this._menu = $("menu");
        this._body = document.querySelector("body");
        this._init(this._botaoMenuLabel);
    }

    fechar(bloquear) {
        this._botaoMenuInput.checked = false;
        this._acoes(bloquear);
    }

    _init(botao) {
        botao.addEventListener("keypress", (event) => event.keyCode == 13 ? botao.click() : false);
        botao.addEventListener("click", () => this._acoes(true));
    }

    _acoes(bloquear) {
        this._mudarAriaHidden(this._menu);
        this._controlaScroll(bloquear);
    }

    _mudarAriaHidden(elemento) {
        if (elemento.ariaHidden == "true") {
            elemento.ariaHidden = false

        } else {
            elemento.ariaHidden = true;
        }
    }

    _controlaScroll(bloquear) {
        if (bloquear && (window.innerWidth < this._maiorTamanhoMobile)) {
            this._botaoMenuInput.checked ? this._desbloquearScroll() : this._bloquearScroll();
        }
    }

    _bloquearScroll() {
        this._body.style.overflow = "hidden";
    }

    _desbloquearScroll() {
        this._body.style.overflow = "initial";
    }
}