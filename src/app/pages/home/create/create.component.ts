import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DeviceService} from "../../../services/device/device.service";
import {Router} from "@angular/router";
import {DeviceProxy} from "../../../models/proxies/device.proxy";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {


  constructor(
    protected readonly fb: FormBuilder,
    protected readonly deviceService: DeviceService,
    protected readonly router: Router,
  ) {
    this.deviceForm = this.fb.group({
      identifier: ['', Validators.required],
      description: [''],
      manufacturer: ['', Validators.required],
      url: ['', Validators.required]
    });
  }

  public deviceForm: FormGroup;

  public async registerDevice(): Promise<void> {
    if (this.deviceForm.valid) {
      const payload: DeviceProxy = this.deviceForm.getRawValue();
      await this.deviceService.newDevice(payload);
      await this.router.navigate(['/home', 'list']);
    }
  }

}
