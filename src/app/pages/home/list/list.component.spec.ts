import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeviceService } from '../../../services/device/device.service';
import { ListComponent } from './list.component';
import { DeviceList } from '../../../models/proxies/device-list.proxy';
import { ListRoutingModule } from './list-routing.module';
import { CommonModule } from '@angular/common';
import { HttpModule } from '../../../modules/http/http.module';
import { environment } from '../../../../environments/environment';
import {ToastrModule} from "ngx-toastr";

describe('ListComponent', () => {
  let deviceService: DeviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        HttpModule.withConfig({
          baseUrl: environment.api.baseUrl,
          bearerTokenKey: environment.keys.token,
        }),
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        ListRoutingModule,
        CommonModule
      ],
      providers: [DeviceService]
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(ListComponent);
    deviceService = TestBed.inject(DeviceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should fetch devices on init', async () => {
    const fixture = TestBed.createComponent(ListComponent);
    const devices: DeviceList = { items: [ '1', '2' ] };
    const component = fixture.componentInstance;

    spyOn(deviceService, 'getDevices').and.returnValue(Promise.resolve(devices.items));

    await component.ngOnInit();

    expect(component.devices).toEqual(devices.items);
  });
});
