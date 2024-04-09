import { Component } from '@angular/core';
import {StorageService} from "../../services/storage/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public storageService: StorageService,
    public router: Router,
  ) {
  }

  public async logout(): Promise<void> {
    await this.storageService.clear();
    await this.router.navigateByUrl('/login');
  }

}
