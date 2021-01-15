import { Convocacao } from "../model/Convocacao.js";
import { ModalError } from "../actions/ModalError.js";

export class ConvocacaoController {
    constructor() {
        this._$ = document.getElementById.bind(document);
    }

    getConvocacao(idFormulario) {
        const formulario = this._$(idFormulario);
        try {
            this._validaDados(new Array(...formulario.elements));
            const desistenciasAmpla =this._converterDado(formulario.ampla);
            const desistenciasAfro =this._converterDado(formulario.afro);
            const convocacoes =this._converterDado(formulario.convocados);
            return new Convocacao(formulario.dataset.nomeTurma, desistenciasAmpla, desistenciasAfro, convocacoes);
        } catch (error) {
            new ModalError().exibir(error.message);
        }
    }

    _converterDado(elemento){
        return parseInt(elemento.value);
    }

    _validaDados(listaElementos) {
        listaElementos.forEach(elemento => {
            if (elemento.tagName == "INPUT" && elemento.value == "") {
                elemento.classList.add("field__input--error")
                throw new Error(`Campo ${elemento.labels[0].innerText.trim()} não foi preenchido corretamente`);
            }
        });
    }
}