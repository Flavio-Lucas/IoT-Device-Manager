import { Injectable } from '@angular/core';
import { StorageService } from './storage/storage.service';
import { environment } from '../../environments/environment';
import { TokenProxy } from '../models/proxies/token.proxy';
import {StorageResult} from "../models/interfaces/storage-result.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private storageService: StorageService,
  ) { }

  public async login({ username, password }: TokenProxy): Promise<string> {
    const storageResult = await this.storageService.set<string>(environment.keys.token, btoa(`${username}:${password}`));
    if (!storageResult.success) {
      throw Error(storageResult.error.message || 'Ocorreu um erro inesperado.');
    } else return storageResult.success;
  }

  public logout(): void {
    // TODO: Implementar depois que o botão de logout já existir
  }

  public async isAuthenticated(): Promise<boolean> {
    return await this.storageService.get(environment.keys.token)
      .then(response => !!response.success);
  }
}
