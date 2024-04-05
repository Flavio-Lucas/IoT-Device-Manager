import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenProxy } from '../../models/proxies/token.proxy';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    protected readonly fb: FormBuilder,
    protected readonly authService: AuthService,
    protected readonly router: Router,
  ) {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public formGroup: FormGroup;

  public async login(): Promise<void> {
    const payload: TokenProxy = this.formGroup.getRawValue();
    await this.authService.login(payload);
    await this.router.navigateByUrl('home');
  }

}
