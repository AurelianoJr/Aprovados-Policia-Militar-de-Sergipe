import { View } from "./View.js";
export class AprovadoView extends View {
    constructor(elemento) {
        super(elemento);
    }

    _template(model, atualizarPosicao) {
        let posicao = 1;
        return `<table class="tabela">
        <thead>
            <tr class="cabecalho-tabela">
                <th class="cabecalho-tabela__dado">Nome</th>
                <th class="cabecalho-tabela__dado cabecalho-tabela__dado--pontuacao">Posição</th>
            </tr>
        </thead>
        <tbody>
            ${model.listarAprovados
                .map(
                    (aprovado) =>
                        `<tr class="linha">
                            <td class="linha__dado">
                                <span class="linha__dado--nome">${aprovado.nome}</span>
                                ${aprovado.convocado ? `<span class="tag ${this.convocado(aprovado)}">${aprovado.convocado}</span>` : ""}
                                ${aprovado.convocadolistaAfro ? `<span class="tag tag--afro">Lista Afro</span>` : ""}
                                ${aprovado.posicaoAfro ? `<span class="tag tag--afro">AFRO - ${aprovado.posicaoAfro}</span>` : ""}
                            </td>
                            <td class="linha__dado linha__dado--pontuacao">${atualizarPosicao ? `${posicao++}` : aprovado.posicaoAmpla}</td>
                        </tr>`
                )
                .join("")}
        </tbody>
    </table>`;
    }

    convocado(aprovado) {
        let tag = "";
        switch (aprovado.convocado) {
            case "Convocado T1":
                tag = "tag--t1-convocado";
                break;

            case "Convocado T1 - EXTRA":
                tag = "tag--t1-extra";
                break;

            case "Simulação T2":
                tag = "tag--t2-convocado";
                break;

            case "Simulação T2 - Convocação extra":
                tag = "tag--t2-extra";
                break;

            case "Simulação T3":
                tag = "tag--t3-convocado";
                break;

            case "Simulação T3 - Convocação extra":
                tag = "tag--t3-extra";
                break;
        }
        return tag;
    }
}

