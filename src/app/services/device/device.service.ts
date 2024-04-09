import {Injectable} from '@angular/core';
import {DeviceInteractor} from '../../interactors/device.interactor';
import {ToastrService} from 'ngx-toastr';
import {DeviceProxy} from '../../models/proxies/device.proxy';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(
    private interactor: DeviceInteractor,
    private toast: ToastrService
  ) {
  }

  public async getDevices(): Promise<string[]> {
    const response = await this.interactor.getDevices();

    if (response.error) {
      await this.toast.error(response.error.message || 'Um erro inesperado impediu que os dispositivos fossem listados, tente novamente mais tarde.')
    }

    return response.success?.items || [];
  }

  public async newDevice(payload: DeviceProxy): Promise<void> {
    const response = await this.interactor.newDevice(payload);

    if (response.error)
      this.toast.error(response.error.message || 'Um erro inesperado impediu que os dispositivos fossem listados, tente novamente mais tarde.')
    else
      this.toast.success('Dispositivo cadastrado com sucesso.')

    return response.success;
  }

  public async editDevice(payload: DeviceProxy, id: string): Promise<DeviceProxy | void> {
    const response = await this.interactor.editDevice(payload, id);

    if (response.error)
      this.toast.error(response.error.message);
    else
      this.toast.success('Dispositivo atualizado com sucesso.')

    return response.success
  }

  public async getById(id: string): Promise<DeviceProxy> {
    const response = await this.interactor.getById(id);

    if (response.error)
      this.toast.error(response.error.message || 'Um erro inesperado impediu que o dispositivo fosse recuperado, tente novamente mais tarde.');

    if (response.success)
      return response.success;
    else
      throw new Error(response.error?.message || 'Um erro inesperado impediu que o dispositivo fosse recuperado, tente novamente mais tarde.');
  }

  public async exclude(id: string): Promise<void> {
    const response = await this.interactor.exclude(id);

    if (response.error) {
      this.toast.error(response.error.message || 'Um erro inesperado aconteceu, tente novamente mais tarde.');
      throw new Error(response.error.message || 'Um erro inesperado aconteceu, tente novamente mais tarde.');
    } else {
      this.toast.success('O dispositivo foi apagado com sucesso.');
    }

    return response.success;
  }
}
