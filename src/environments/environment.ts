// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  isMock: true, // TODO: Desabilitar quando houver o link para a API
  api: {
    baseUrl: '',// A parte que não se altera da url da sua api. ex.: https://urldaminhaapi.com
    devices: {
      base: '/device',
      byId: '/device/{id}'
    }
  },
  configuration: {
    routeToRedirectWhenAuthenticated: '/login',
    routeToRedirectWhenUnAuthenticated: '/home',
  },
  keys: {
    token: 'BASIC_TOKEN'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
