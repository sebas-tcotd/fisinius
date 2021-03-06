// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * Variables de entorno que la aplicación utiliza para funcionar de manera correcta.
 *
 * Estas variables se reconocen a nivel de desarrollo.
 */
export const environment = {
  production: false,
  newsUrlBase: process.env.NG_APP_NEWS_URL_BASE,
  azureApiCode: process.env.NG_APP_AZURE_API_CODE,
  azureAPI_URL: process.env.NG_APP_AZURE_API_URL,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
