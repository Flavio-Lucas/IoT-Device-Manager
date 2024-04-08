import { environment } from '../../environments/environment';
import { DeviceList } from '../models/proxies/device-list.proxy';
import { HttpService } from '../modules/http/services/http.service';
import { AsyncResult } from '../modules/http/models/async-result';
import { Injectable } from '@angular/core';
import {DeviceProxy} from "../models/proxies/device.proxy";

@Injectable({
  providedIn: 'root',
})
export class DeviceInteractor {

  constructor(
    private http: HttpService
  ) {}

  public async getDevices(): Promise<AsyncResult<DeviceList>> {
    if (environment.isMock) {
      return Promise.resolve({ success: { items: ['1', '2'] } });
    }
    return await this.http.get<DeviceList>(environment.api.devices.base);
  }

  public async newDevice(payload: DeviceProxy): Promise<AsyncResult<void>> {
    if (environment.isMock) {
      return { success: undefined, error: undefined }
    }
    return await this.http.post(environment.api.devices.base, payload);
  }
}
