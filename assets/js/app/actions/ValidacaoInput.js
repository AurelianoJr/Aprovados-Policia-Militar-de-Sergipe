export class ValidacaoInput {
    
    constructor() {
        this._vincularBotao();
    }

    _vincularBotao() {
        document.querySelectorAll("input[type=number]").forEach(input => input.addEventListener("blur", event => this._verificarValidade(event.target)));
    }

    _verificarValidade(elemento) {
        if (elemento.checkValidity()) {
            this._removeClassInvalid(elemento);
        } else {
            this._addClassInvalid(elemento);
        }
    }


    _addClassInvalid(elemento) {
        elemento.classList.add("field__input--error");
    }

    _removeClassInvalid(elemento) {
        elemento.classList.remove("field__input--error");
    }
}