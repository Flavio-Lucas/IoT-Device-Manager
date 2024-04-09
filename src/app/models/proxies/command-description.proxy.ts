import { CommandProxy } from './command.proxy';

export class CommandDescriptionProxy {
  constructor(
    operation: string,
    description: string,
    command: CommandProxy,
    result: string,
    format: string,
  ) {
    this.operation = operation;
    this.description = description;
    this.command = command;
    this.result = result;
    this.format = format;
  }

  // Nome da operação executada pelo dispositivo
  public operation: string;

  // Descrição e detalhes adicionais sobre a operação e/ou o comando
  public description: string;

  // Referência à entidade Command
  public command: CommandProxy;

  // Descrição do resultado esperado da execução do comando
  public result: string;

  // Definição, usando o padrão OpenAPI para especificação de schemas de dados, do formato dos dados retornados pelo comando
  public format: string;
}
