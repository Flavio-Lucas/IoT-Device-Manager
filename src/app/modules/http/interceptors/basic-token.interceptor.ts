//#region Imports

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { concatAll, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { TokenProxy } from '../../../models/proxies/token.proxy';
import { StorageService } from '../../../services/storage/storage.service';

//#endregion

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  //#region Constructor

  constructor(
    private readonly storage: StorageService,
  ) { }

  //#endregion

  //#region Properties

  public static readonly DISABLE_HEADER: string = 'X-Disabled-BasicAuth';

  //#endregion

  //#region Methods

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.headers.get(BasicAuthInterceptor.DISABLE_HEADER)) {
      return next.handle(req.clone({
        headers: req.headers.delete(BasicAuthInterceptor.DISABLE_HEADER),
      }));
    }

    return fromPromise(this.storage.get<TokenProxy>(environment.keys.token))
      .pipe(
        map(result => {
          if (result.error || !result.success)
            return next.handle(req);

          const credentials = btoa(`${result.success.username}:${result.success.password}`);
          const headers = req.headers.set('Authorization', `Basic ${credentials}`);

          return next.handle(req.clone({ headers }));
        }),
        concatAll(),
      );
  }

  //#endregion

}
