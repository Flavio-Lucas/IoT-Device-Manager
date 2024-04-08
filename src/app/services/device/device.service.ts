import { Injectable } from '@angular/core';
import { DeviceInteractor } from '../../interactors/device.interactor';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(
    private interactor: DeviceInteractor,
    private toast: ToastrService
  ) {}

  public async getDevices(): Promise<string[]> {
    const response = await this.interactor.getDevices();

    if (response.error) {
      await this.toast.error(response.error.message || 'Um erro inesperado impediu que os dispositivos fossem listados, tente novamente mais tarde.')
    }

    return response.success?.items || [];
  }
}
