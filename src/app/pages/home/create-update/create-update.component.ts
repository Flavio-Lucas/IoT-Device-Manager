import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DeviceService } from '../../../services/device/device.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceProxy } from '../../../models/proxies/device.proxy';
import { CommandDescriptionProxy } from '../../../models/proxies/command-description.proxy';
import {CommandProxy} from "../../../models/proxies/command.proxy";

@Component({
  selector: 'app-create',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent implements OnInit {

  constructor(
    protected readonly fb: FormBuilder,
    protected readonly deviceService: DeviceService,
    protected readonly router: Router,
    protected readonly activatedRoute: ActivatedRoute,
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isUpdate = !!this.id;

    this.deviceForm = this.fb.group({
      identifier: ['', Validators.required],
      description: ['', Validators.required],
      manufacturer: ['', Validators.required],
      url: ['', Validators.required]
    });

    this.commandDescriptionForm = this.fb.group({
      result: ['', Validators.required],
      description: ['', Validators.required],
      format: ['', Validators.required],
      operation: ['', Validators.required],
      // command object
      command: ['', Validators.required],
      parameters: [[], Validators.required], // { name: string, description: string }[]
    });
  }

  public deviceForm: FormGroup;

  public commandDescriptionForm: FormGroup;

  public isUpdate: boolean = false;

  public commands: CommandDescriptionProxy[] = [];

  public isCreatingCommand: boolean = false;

  public id: string | null;

  public deviceToUpdate: DeviceProxy | undefined;

  public async ngOnInit(): Promise<void> {
    if (this.id && this.isUpdate){
      this.deviceToUpdate = await this.deviceService.getById(this.id);
      this.deviceForm.controls['identifier'].setValue(this.deviceToUpdate.identifier);
      this.deviceForm.controls['description'].setValue(this.deviceToUpdate.description);
      this.deviceForm.controls['manufacturer'].setValue(this.deviceToUpdate.manufacturer);
      this.deviceForm.controls['url'].setValue(this.deviceToUpdate.url);

      this.commands = this.deviceToUpdate.commands;
    }
  }

  public async registerDevice(): Promise<void> {
    if (this.deviceForm.valid) {
      const payload: DeviceProxy = this.deviceForm.getRawValue();
      await this.deviceService.newDevice(payload);
      await this.router.navigate(['/home', 'list']);
    }
  }

  public async updateDevice(): Promise<void> {
    if (this.deviceForm.valid && this.id) {
      const payload: DeviceProxy = this.deviceForm.getRawValue();
      await this.deviceService.editDevice(payload, this.id);
      await this.router.navigate(['/home', 'list']);
    }
  }

  public submitDevice(): void {
    const device: DeviceProxy = this.deviceForm.getRawValue();
    device.commands = this.commands;
    console.log(device);
    this.isUpdate ? this.updateDevice() : this.registerDevice()
  }

  public addCommand(): void {
    const formsInformation = this.commandDescriptionForm.getRawValue();
    const command: CommandDescriptionProxy = new CommandDescriptionProxy(
      formsInformation.operation,
      formsInformation.description,
      new CommandProxy(formsInformation.command, formsInformation.parameters),
      formsInformation.result,
      formsInformation.format,
    );

    this.commands.push(command);
    this.isCreatingCommand = false;
    console.log(this.commands);
    this.commandDescriptionForm.reset({

    })
  }

  public enableCommandCreation() {
    this.isCreatingCommand = true;
  }

  public addParameter(name: string, description: string) {
    const oldParameters = this.commandDescriptionForm.controls['parameters'].value || [];
    const parameter = {
      name, description,
    }

    this.commandDescriptionForm.controls['parameters'].setValue([...oldParameters, parameter]);
  }
}
