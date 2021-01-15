export class Convocacao {
    constructor(nomeTurma, desistenciasAmpla, desistenciasAfro, quantidadeConvocacao) {
        this._nomeTurma = nomeTurma
        this._desistenciasAmpla = desistenciasAmpla;
        this._desistenciasAfro = desistenciasAfro;
        this._quantidadeConvocacao = quantidadeConvocacao;
    }

    get nomeTurma() {
        return this._nomeTurma;
    }
    
    get desistenciasAmpla() {
        return this._desistenciasAmpla;
    }

    get desistenciasAfro() {
        return this._desistenciasAfro;
    }

    get quantidadeConvocacao() {
        return this._quantidadeConvocacao;
    }
}