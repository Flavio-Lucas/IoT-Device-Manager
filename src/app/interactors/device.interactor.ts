import {environment} from '../../environments/environment';
import {DeviceList} from '../models/proxies/device-list.proxy';
import {HttpService} from '../modules/http/services/http.service';
import {AsyncResult} from '../modules/http/models/async-result';
import {Injectable} from '@angular/core';
import {DeviceProxy} from "../models/proxies/device.proxy";

@Injectable({
  providedIn: 'root',
})
export class DeviceInteractor {

  constructor(
    private http: HttpService
  ) {
  }

  public async getDevices(): Promise<AsyncResult<DeviceList>> {
    if (environment.isMock) {
      return Promise.resolve({success: {items: ['1', '2']}});
    }
    return await this.http.get<DeviceList>(environment.api.devices.base);
  }

  public async newDevice(payload: DeviceProxy): Promise<AsyncResult<void>> {
    if (environment.isMock) {
      return {success: undefined, error: undefined}
    }
    return await this.http.post(environment.api.devices.base, payload);
  }

  public async getById(id: string): Promise<AsyncResult<DeviceProxy>> {
    if (environment.isMock) {
      return {
        success: {
          identifier: id, // Identificador do dispositivo
          description: 'Descrição do dispositivo, incluindo detalhes do seu uso e das informações geradas',
          manufacturer: 'Nome do fabricante do dispositivo',
          url: 'URL de acesso ao dispositivo',
          commands: [
            {
              result: ' Descrição do resultado esperado da execução do comando',
              description: 'Descrição e detalhes adicionais sobre a operação e/ou o comando',
              format: 'Definição, usando o padrão OpenAPI para especificação de schemas de dados, do formato dos dados retornados pelo comando',
              operation: 'Nome da operação executada pelo dispositivo',
              command: {
                command: 'Sequencia de bytes enviados para execução do comando',
                parameters: [
                  {
                    name: 'Nome do parâmetro',
                    description: 'Descrição do parâmetro, incluindo detalhes de sua utilização, valores possíveis e funcionamento experado da operação de acordo com esses valores'
                  }
                ],
              }
            }
          ],
        }
      }
    }
    const url = environment.api.devices.byId.replace('{id}', id);
    return await this.http.get(url);
  }

  public async editDevice(payload: DeviceProxy, id: string): Promise<AsyncResult<DeviceProxy>> {
    const url = environment.api.devices.byId.replace('{id}', id);
    return await this.http.put<DeviceProxy>(url, payload);
  }

  public async exclude(id: string): Promise<AsyncResult<void>> {
    if (environment.isMock) {
      return { success: undefined };
    }
    const url = environment.api.devices.byId.replace('{id}', id);
    return await this.http.delete(url);
  }
}
