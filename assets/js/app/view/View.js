export class View {
    constructor(elemento) {
        if (this.constructor == View) {
            throw new Error('A classe "View" não pode ser instânciada.');
        }

        this._elemento = elemento;
    }

    update(model, atualizarPosicao) {
        this._elemento.innerHTML = this._template(model, atualizarPosicao);
    }
}
