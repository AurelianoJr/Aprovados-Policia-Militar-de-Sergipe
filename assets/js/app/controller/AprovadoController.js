import { ListaAprovados } from "../model/ListaAprovados.js";
import { AprovadoService } from "../service/AprovadoService.js";
import { AprovadoView } from "../view/AprovadoView.js";

export class AprovadoController {

    constructor() {
        this._sexo;
        this._aprovadoView = new AprovadoView(document.getElementById("lista-aprovados"));
        this._aprovadosLista = new ListaAprovados();
        this._aprovadosListaExibicao = new ListaAprovados();
    }

    carregarLista(sexo, fecharAnimacao) {
        new AprovadoService().list(`https://aprovados-server.uc.r.appspot.com/api/aprovados${sexo.tipo}`).then(listaAprovados => {
            this._sexo = sexo;
            this._aprovadosLista.esvaziar();
            this._aprovadosLista.adicionarVarios(listaAprovados);
            this._aprovadosListaExibicao.adicionarVarios(listaAprovados);
            this._aprovadoView.update(this._aprovadosLista, false);
            fecharAnimacao();
        });
    }

    simular(convocacaoT2, convocacaoT3, exibirT1) {
        this._reiniciarListaDeExibicao();
        this._removerAprovadosPrimeiraTurmaDaLista(exibirT1);
       
        this._simularConvocacao(convocacaoT2.quantidadeConvocacao, convocacaoT2.desistenciasAmpla, convocacaoT2.desistenciasAfro, convocacaoT2.nomeTurma);
        this._simularConvocacao(convocacaoT3.quantidadeConvocacao, convocacaoT3.desistenciasAmpla, convocacaoT3.desistenciasAfro, convocacaoT3.nomeTurma);
        
        this._aprovadoView.update(this._aprovadosListaExibicao, true);
    }

    _reiniciarListaDeExibicao() {
        this._aprovadosListaExibicao.esvaziar();
        this._aprovadosListaExibicao.adicionarVarios(this._aprovadosLista.listarAprovados);
    }

    _removerAprovadosPrimeiraTurmaDaLista(exibirT1) {
        if (exibirT1) return;

        let lista = this._aprovadosListaExibicao.listarAprovados.filter(aprovado => {
            if (!aprovado.convocado) return aprovado;
        });

        this._aprovadosListaExibicao = new ListaAprovados();
        this._aprovadosListaExibicao.adicionarVarios(lista);
    }

    _simularConvocacao(quantidadeTurma, desistenciaAmpla, desistenciaAfro, nomeTurma) {
        let aprovados;
        const quantidadeAmpla = quantidadeTurma * this._sexo.percentualAmpla;
        const quantidadeAfro = quantidadeTurma * this._sexo.percentualAfro;

        aprovados = this._selecionarNaoConvocados();
        this._marcarAprovados(nomeTurma, this._selecionarAprovados(aprovados, quantidadeAmpla, false), false);

        aprovados = this._selecionarNaoConvocados();
        this._marcarAprovados(nomeTurma, this._selecionarAprovados(aprovados, quantidadeAfro, true), true);

        aprovados = this._selecionarNaoConvocados();
        this._marcarAprovados(`${nomeTurma} - Convocação extra`, this._selecionarAprovados(aprovados, desistenciaAmpla, false), false);

        aprovados = this._selecionarNaoConvocados();
        this._marcarAprovados(`${nomeTurma} - Convocação extra`, this._selecionarAprovados(aprovados, desistenciaAfro, true), true);
    }

    _selecionarNaoConvocados() {
        return this._aprovadosListaExibicao.listarAprovados.filter(aprovado => {
            if (!aprovado.convocado) return aprovado;
        });
    }

    _selecionarAprovados(aprovados, quantidade, selecaoAfro) {
        if (selecaoAfro) {
            aprovados = aprovados.filter(aprovado => aprovado.posicaoAfro);
        }

        return aprovados.slice(0, quantidade);
    }

    _marcarAprovados(nomeTurma, aprovados, ehAfro) {
        aprovados.forEach(aprovado => {
            if (ehAfro) {
                aprovado.convocadolistaAfro = true;
            }

            aprovado.convocado = nomeTurma;
        });
    }
}