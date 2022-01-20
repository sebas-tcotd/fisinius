/**
 * Variables de entorno que la aplicación utiliza para funcionar de manera correcta.
 *
 * Estas variables se reconocen a nivel de producción.
 */
export const environment = {
  production: true,
  newsUrlBase: process.env.NG_APP_NEWS_URL_BASE,
  azureApiCode: process.env.NG_APP_AZURE_API_CODE,
  azureAPI_URL: process.env.NG_APP_AZURE_API_URL,
};
