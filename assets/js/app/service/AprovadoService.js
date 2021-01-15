import { HttpService } from "./HttpService.js";
import { Aprovado } from "../model/Aprovado.js";

export class AprovadoService {
    constructor() {
        this._http = new HttpService();
    }

    async list(url) {
        const aprovados = await this._http.get(url);
        return aprovados.map(
            (aprovado) => new Aprovado(
                aprovado._id,
                aprovado.inscricao,
                aprovado.nome,
                aprovado.posicaoAmpla,
                aprovado.posicaoAfro,
                aprovado.pontuacao,
                aprovado.sexo,
                aprovado.convocado,
                aprovado.convocadolistaAfro
            )
        );
    }

}
