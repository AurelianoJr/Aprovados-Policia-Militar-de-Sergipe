import { Aprovado } from "./Aprovado.js";

export class ListaAprovados {
    
    constructor() {
        this._listaAprovados = [];
    }

    get listarAprovados() {
        return [].concat(this._listaAprovados);
    }

    adicionar(aprovado) {
        const novoAprovado = new Aprovado(aprovado.id, aprovado.inscricao, aprovado.nome, aprovado.posicaoAmpla, aprovado.posicaoAfro, aprovado.pontuacao, aprovado.sexo, aprovado.convocado, aprovado.convocadolistaAfro);
        this._listaAprovados.push(novoAprovado);
    }

    length() {
        return this._listaAprovados.length;
    }

    adicionarVarios(aprovados) {
        aprovados.forEach((aprovado) => {
            this.adicionar(aprovado);
        });
    }

    esvaziar() {
        this._listaAprovados = [];
    }

    ordenar() {
        this._listaAprovados.sort((a, b) => {
            return a.posicaoAmpla - b.posicaoAmpla;
        });
    }
}
