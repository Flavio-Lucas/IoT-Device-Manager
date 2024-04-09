import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../../../services/device/device.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private deviceService: DeviceService,
    private router: Router,
  ) { }

  public devices: string[] = [];

  public async ngOnInit(): Promise<void> {
    this.devices = await this.deviceService.getDevices();
    console.log(this.devices)
  }

  public async openEdit(identifier: string): Promise<void> {
    await this.router.navigateByUrl('/home/edit/' + identifier);
  }

  public exclude(identifier: string): void {
    // TODO: Implementar assim que possível
  }

}
