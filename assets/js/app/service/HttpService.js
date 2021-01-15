export class HttpService {
    _handlerErros(response) {
        if (!response) throw new Error("Erro ao realizar requisição");
        return response;
    }

    async get(url) {
        const response = await fetch(url);
        return this._handlerErros(response).json();
    }
}
