import { Injectable } from '@angular/core';
import { StorageResult } from '../../models/interfaces/storage-result.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() {}

  public async set<T>(key: string, item: T): Promise<StorageResult<T>> {
    try {
      localStorage.setItem(key, JSON.stringify(item));
      return { success: item };
    } catch (error) {
      console.error('Error:', error);
      return { error: { message: 'Ocorreu um erro ao definir o item no armazenamento.' } };
    }
  }

  public async get<T>(key: string): Promise<StorageResult<T>> {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return { success: JSON.parse(item) };
      } else {
        return { error: { message: 'Item não encontrado no armazenamento.' } };
      }
    } catch (error) {
      console.error('Error:', error);
      return { error: { message: 'Ocorreu um erro ao obter o item do armazenamento.' } };
    }
  }

  public async remove(key: string): Promise<StorageResult<boolean>> {
    try {
      localStorage.removeItem(key);
      return { success: true };
    } catch (error) {
      console.error('Error:', error);
      return { error: { message: 'Ocorreu um erro ao remover o item do armazenamento.' } };
    }
  }

  public async clear(): Promise<StorageResult<boolean>> {
    try {
      localStorage.clear();
      return { success: true };
    } catch (error) {
      console.error('Error:', error);
      return { error: { message: 'Ocorreu um erro ao limpar o armazenamento.' } };
    }
  }
}
