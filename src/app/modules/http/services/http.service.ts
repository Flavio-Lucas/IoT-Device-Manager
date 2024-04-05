//#region Imports

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { AsyncResult } from '../models/async-result';
import { DefaultOptions, ExtraOptions } from '../models/http-options';

//#endregion

@Injectable()
export class HttpService {

  //#region Constructor

  constructor(
    protected readonly http: HttpClient,
  ) { }

  //#endregion

  //#region Properties

  private readonly onHttpError: Subject<HttpErrorResponse> = new Subject<HttpErrorResponse>();

  //#endregion

  //#region Methods

  public getOnHttpError$(): Observable<HttpErrorResponse> {
    return this.onHttpError.asObservable();
  }

  public getHttpClient(): HttpClient {
    return this.http;
  }

  public getNativeClient(): HttpClient {
    return this.http;
  }

  public async get<T>(
    url: string,
    options?: DefaultOptions,
  ): Promise<AsyncResult<T>> {
    return await this.http.get<T>(url, options).toPromise()
      .then((data: T | undefined) => {
        if (data !== undefined) {
          return this.success(data);
        } else {
          return this.error<T>(new HttpErrorResponse({ error: new Error("Data is undefined"), status: 500 }));
        }
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });

  }

  public async post<T>(
    url: string,
    payload: object,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await this.http.post<T>(url, payload, options).toPromise()
      .then((data: T | undefined) => {
        if (data !== undefined) {
          return this.success(data);
        } else {
          // Caso data seja undefined, trata o erro aqui, se necessário.
          return this.error<T>(new HttpErrorResponse({ error: new Error("Data is undefined"), status: 500 }));
        }
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  public async put<T>(
    url: string,
    payload: object,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await this.http.put<T>(url, payload, options).toPromise()
      .then((data: T | undefined) => {
        if (data !== undefined) {
          return this.success(data);
        } else {
          // Caso data seja undefined, trata o erro aqui, se necessário.
          return this.error<T>(new HttpErrorResponse({ error: new Error("Data is undefined"), status: 500 }));
        }
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  public async delete<T>(
    url: string,
    options?: ExtraOptions,
  ): Promise<AsyncResult<T>> {
    return await this.http.delete<T>(url, options).toPromise()
      .then((data: T | undefined) => {
        if (data !== undefined) {
          return this.success(data);
        } else {
          // Caso data seja undefined, trata o erro aqui, se necessário.
          return this.error<T>(new HttpErrorResponse({ error: new Error("Data is undefined"), status: 500 }));
        }
      })
      .catch((error: HttpErrorResponse) => {
        return this.error<T>(error);
      })
      .then<AsyncResult<T>>((result: AsyncResult<T>) => {
        return result;
      });
  }

  private success<T>(result: T): AsyncResult<T> {
    return {
      success: result,
    };
  }

  private error<T>(error: HttpErrorResponse): AsyncResult<T> {
    this.onHttpError.next(error);

    return {
      error,
    };
  }

  //#endregion

}
