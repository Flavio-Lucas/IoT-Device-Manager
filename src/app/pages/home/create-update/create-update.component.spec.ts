import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateComponent } from './create-update.component';
import { Router } from '@angular/router';
import { DeviceService } from '../../../services/device/device.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule} from "ngx-toastr";
import {HttpModule} from "../../../modules/http/http.module";
import {environment} from "../../../../environments/environment";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CreateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;
  let router: Router;
  let deviceService: DeviceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateComponent ],
      imports: [
        HttpModule.withConfig({
          baseUrl: environment.api.baseUrl,
          bearerTokenKey: environment.keys.token,
        }),
        ToastrModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      providers: [ DeviceService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    deviceService = TestBed.inject(DeviceService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to device list on successful creation', async () => {
    const navigateSpy = spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));

    const createDeviceSpy = spyOn(deviceService, 'newDevice').and.returnValue(Promise.resolve());

    component.deviceForm.setValue({
      identifier: 'device1',
      description: 'Device description',
      manufacturer: 'Manufacturer',
      url: 'http://example.com'
    });

    await component.registerDevice();

    expect(createDeviceSpy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/home', 'list']);
  });
});
