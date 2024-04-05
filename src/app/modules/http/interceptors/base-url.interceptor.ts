//#region Imports

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpAsyncConfig } from '../models/http-async.config';
import { HTTP_ASYNC_CONFIG } from '../models/injection-tokens';

//#endregion

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

  //#region Constructor

  constructor(
    @Inject(HTTP_ASYNC_CONFIG)
    @Optional()
    protected readonly config?: HttpAsyncConfig,
  ) { }

  //#endregion

  //#region Properties

  public static readonly DISABLE_HEADER: string = 'X-Disabled-BaseUrl';

  //#endregion

  //#region Methods

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.config?.baseUrl) {
      console.warn('Você incluiu o Interceptor para adicionar um url base mas deve ter esquecido de configurar o url base no módulo.');

      return next.handle(req);
    }

    if (!req.headers.get(BaseUrlInterceptor.DISABLE_HEADER))
      req = req.clone({
        url: `${this.config?.baseUrl}${req.url}`,
      });
    else {
      req = req.clone({
        headers: req.headers.delete(BaseUrlInterceptor.DISABLE_HEADER),
      });
    }

    return next.handle(req);
  }

  //#endregion

}
