import { Component } from '@angular/core';
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public storageService: StorageService,
  ) {
  }

  public async logout(): Promise<void> {
    await this.storageService.clear()
  }

}
