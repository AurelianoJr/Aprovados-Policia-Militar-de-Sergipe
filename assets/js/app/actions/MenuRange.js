export class MenuRange {

    constructor() {
        this._$ = document.getElementById.bind(document);
        this._rangeT2 = this._$("convocacoes-turma-2");
        this._rangeT3 = this._$("convocacoes-turma-3");
        this._init();
    }

    _init() {
        this.listernerRangeInput("range-t2");
        this.listernerRangeInput("range-t3");
        this.equilibrarValueRange();
    }

    listernerRangeInput(rangeContainer) {
        const container = this._$(rangeContainer);
        const range = container.querySelector("input");
        const label = container.querySelector("label");

        range.addEventListener("input", () => {
            this.atualizaLabel(label, range);
        });
    }

    equilibrarValueRange() {
        const valorMaximo = 900;
        this._rangeT2.addEventListener("input", () => {
            this._rangeT3.max = valorMaximo - parseInt(this._rangeT2.value);
        });

        this._rangeT3.addEventListener("input", () => {
            this._rangeT2.max = valorMaximo - parseInt(this._rangeT3.value);
        });
    }

    atualizaLabel(label, range) {
        label.innerHTML = range.value;
    }
}