export class ParameterProxy {
  constructor(
    name: string,
    description: string,
  ) {
    this.name = name;
    this.description = description;
  }

  // Nome do parâmetro
  public name: string;

  // Descrição do parâmetro, incluindo detalhes de sua utilização, valores possíveis e funcionamento esperado da operação de acordo com esses valores
  public description: string;
}
