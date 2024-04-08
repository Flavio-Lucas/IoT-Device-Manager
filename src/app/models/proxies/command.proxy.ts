import {ParameterProxy} from "./parameter.proxy";

export class CommandProxy {
  constructor(
    command: string,
    parameters: ParameterProxy[],
  ) {
    this.command = command;
    this.parameters = parameters;
  }

  public command: string; // Sequencia de bytes enviados para execução do comando
  public parameters: ParameterProxy[]; // Lista de parâmetros aceitas pelo comando
}
