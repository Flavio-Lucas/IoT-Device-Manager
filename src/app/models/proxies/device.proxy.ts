import { CommandDescriptionProxy } from './command-description.proxy';

export class DeviceProxy {

  constructor(identifier: string, description: string, manufacturer: string, url: string, commands: CommandDescriptionProxy[]) {
    this.identifier = identifier;
    this.description = description;
    this.manufacturer = manufacturer;
    this.url = url;
    this.commands = commands;
  }

  // Identificador do dispositivo
  public identifier: string;

  // Descrição do dispositivo, incluindo detalhes do seu uso e das informações geradas
  public description: string;

  // Nome do fabricante do dispositivo
  public manufacturer: string;

  // URL de acesso ao dispositivo
  public url: string;

  // Lista de comandos disponibilizada pelo dispositivo
  public commands: CommandDescriptionProxy[]; // Supondo que CommandDescription seja uma interface que descreve os comandos
}
