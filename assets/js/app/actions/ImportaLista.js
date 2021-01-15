import { Sexo } from "../model/Sexo.js";
import { AnimacaoCarregamento } from "./AnimacaoCarregamento.js";

export class ImportaLista {

    constructor(aprovadosController) {
        this._aprovadosController = aprovadosController;
        this._$ = document.getElementById.bind(document);
        this._botaoMasculino = this._$("botao-man");
        this._botaoFeminino = this._$("botao-woman");

        this._vinculaBotaoSexoLista(this._botaoMasculino, "masculino");
        this._vinculaBotaoSexoLista(this._botaoFeminino, "feminino");
    }

    _vinculaBotaoSexoLista(botao, sexoLista) {
        botao.addEventListener("click", (event) => {
            this._desmarcarSelecao()
            this._marcarSelecao(event.target);
           
            const animacao = new AnimacaoCarregamento();
            animacao.adicionarAnimacao();
            
            const SEXO = new Sexo(sexoLista);
            this._aprovadosController.carregarLista(SEXO, animacao.removerAnimacao.bind(animacao));
        });
    }

    _marcarSelecao(botao) {
        botao.classList.add("botao--selecionado");
    }

    _desmarcarSelecao() {
        this._botaoFeminino.classList.remove("botao--selecionado");
        this._botaoFeminino.classList.remove("botao--selecionado");
    }
    
}