export class Sexo{constructor(i){this.tipo=i,this.percentualAmpla,this.percentualAfro,this.definirPercentual()}definirPercentual(){if("masculino"==this.tipo)return this.percentualAmpla=.72,void(this.percentualAfro=.08);if("feminino"==this.tipo)return this.percentualAmpla=.18,void(this.percentualAfro=.02);throw new Error(`Parâmetro "${this.tipo}" não válido | Parâmetros válidos: "feminino" e "masculino".`)}}