export class Sexo {
    constructor(tipo) {
        this.tipo = tipo;
        this.percentualAmpla;
        this.percentualAfro;
        this.definirPercentual();
    }

    definirPercentual() {
        if (this.tipo == "masculino") {
            this.percentualAmpla = 0.72;
            this.percentualAfro = 0.08;
            return;
        }

        if (this.tipo == "feminino") {
            this.percentualAmpla = 0.18;
            this.percentualAfro = 0.02;
            return;
        }

        throw new Error(`Parâmetro "${this.tipo}" não válido | Parâmetros válidos: "feminino" e "masculino".`);
    }
}