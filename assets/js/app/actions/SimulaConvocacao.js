import { ConvocacaoController } from "../controller/ConvocacaoController.js";
import { ModalError } from "./ModalError.js";
import { MenuBotao } from "./MenuBotao.js";

export class SimulaConvocacao {

    constructor(aprovadoController) {
        this._$ = document.getElementById.bind(document);
        this._convocacaoTurma2;
        this._convocacaoTurma3;
        this._aprovadoController = aprovadoController;
    }

    requisitarSimulacao() {
        this._$("botao-simulacao").addEventListener("click", () => {
            if (!this._getConvocacoes()) return;
            
            new MenuBotao().fechar(false);

            if (!this._listaImportada()) return;

            this._aprovadoController.simular(this._convocacaoTurma2, this._convocacaoTurma3, this._getExibicaoTurma1());
        });
    }

    _getConvocacoes() {
        const convocacaoController = new ConvocacaoController();
        this._convocacaoTurma2 = convocacaoController.getConvocacao("formulario-turma-2");
        this._convocacaoTurma3 = convocacaoController.getConvocacao("formulario-turma-3");
        return this._convocacaoTurma2 && this._convocacaoTurma3;
    }

    _getExibicaoTurma1() {
        return this._$("exibir-t1").checked;
    }

    _listaImportada() {
        if (this._$("lista-aprovados").children.length > 0) return true;
        new ModalError().exibir("Antes de simular convocação é necessario importar uma lista");
        return false;
    }
}
