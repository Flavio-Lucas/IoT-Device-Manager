//#region Imports

import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen } from 'rxjs/operators';

//#endregion

@Injectable({
  providedIn: 'root',
})
export class RetryInterceptor implements HttpInterceptor {

  //#region Properties

  private readonly maxRetriesAttempts: number = 3;

  private readonly retryInterval: number = 1_000;

  //#endregion

  //#region Methods

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen(attempts => {
        return attempts.pipe(
          mergeMap((error: HttpErrorResponse, i) => {
            const retryAttempt = i;

            if (error.status >= 100 && error.status < 500)
              return throwError(error);


            if (retryAttempt > this.maxRetriesAttempts)
              return throwError(error);

            console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * this.retryInterval}ms`);

            return timer(retryAttempt * this.retryInterval);
          }),
        );
      }),
    );
  }

  //#endregion

}
