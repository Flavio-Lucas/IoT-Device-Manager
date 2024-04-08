import { Injectable } from '@angular/core';
import { DeviceInteractor } from '../../interactors/device.interactor';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {

  constructor(
    private interactor: DeviceInteractor,
  ) {}

  public async getDevices(): Promise<string[]> {
    const response = await this.interactor.getDevices();

    console.log(response?.success?.items);

    return response.success?.items || [];
  }
}
