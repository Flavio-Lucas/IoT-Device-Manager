import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../services/device/device.service';

@Component({
  selector: 'app-create',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private deviceService: DeviceService,
  ) { }

  public devices: string[] = [];

  public async ngOnInit(): Promise<void> {
    this.devices = await this.deviceService.getDevices();
    console.log(this.devices)
  }

}
