import{ListaAprovados}from"../model/ListaAprovados.js";import{AprovadoService}from"../service/AprovadoService.js";import{AprovadoView}from"../view/AprovadoView.js";export class AprovadoController{constructor(){this._sexo,this._aprovadoView=new AprovadoView(document.getElementById("lista-aprovados")),this._aprovadosLista=new ListaAprovados,this._aprovadosListaExibicao=new ListaAprovados}carregarLista(o,a){(new AprovadoService).list("https://aprovados-server.uc.r.appspot.com/api/aprovados"+o.tipo).then(i=>{this._sexo=o,this._aprovadosLista.esvaziar(),this._aprovadosLista.adicionarVarios(i),this._aprovadosListaExibicao.adicionarVarios(i),this._aprovadoView.update(this._aprovadosLista,!1),a()})}simular(o,a,i){this._reiniciarListaDeExibicao(),this._removerAprovadosPrimeiraTurmaDaLista(i),this._simularConvocacao(o.quantidadeConvocacao,o.desistenciasAmpla,o.desistenciasAfro,o.nomeTurma),this._simularConvocacao(a.quantidadeConvocacao,a.desistenciasAmpla,a.desistenciasAfro,a.nomeTurma),this._aprovadoView.update(this._aprovadosListaExibicao,!0)}_reiniciarListaDeExibicao(){this._aprovadosListaExibicao.esvaziar(),this._aprovadosListaExibicao.adicionarVarios(this._aprovadosLista.listarAprovados)}_removerAprovadosPrimeiraTurmaDaLista(o){if(o)return;let a=this._aprovadosListaExibicao.listarAprovados.filter(o=>{if(!o.convocado)return o});this._aprovadosListaExibicao=new ListaAprovados,this._aprovadosListaExibicao.adicionarVarios(a)}_simularConvocacao(o,a,i,s){let r;const t=o*this._sexo.percentualAmpla,e=o*this._sexo.percentualAfro;r=this._selecionarNaoConvocados(),this._marcarAprovados(s,this._selecionarAprovados(r,t,!1),!1),r=this._selecionarNaoConvocados(),this._marcarAprovados(s,this._selecionarAprovados(r,e,!0),!0),r=this._selecionarNaoConvocados(),this._marcarAprovados(s+" - Convocação extra",this._selecionarAprovados(r,a,!1),!1),r=this._selecionarNaoConvocados(),this._marcarAprovados(s+" - Convocação extra",this._selecionarAprovados(r,i,!0),!0)}_selecionarNaoConvocados(){return this._aprovadosListaExibicao.listarAprovados.filter(o=>{if(!o.convocado)return o})}_selecionarAprovados(o,a,i){return i&&(o=o.filter(o=>o.posicaoAfro)),o.slice(0,a)}_marcarAprovados(o,a,i){a.forEach(a=>{i&&(a.convocadolistaAfro=!0),a.convocado=o})}}