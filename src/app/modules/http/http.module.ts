//#region Imports

import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HttpAsyncConfig } from './models/http-async.config';
import { HTTP_ASYNC_CONFIG } from './models/injection-tokens';
import { HttpService } from './services/http.service';

//#endregion

@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpService,
  ],
})
export class HttpModule {

  //#region Methods

  public static withConfig(configValue: HttpAsyncConfig | (() => HttpAsyncConfig)): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {
          provide: HTTP_ASYNC_CONFIG,
          useValue: configValue,
        },
        HttpService,
      ],
    };
  }

  //#endregion

}
