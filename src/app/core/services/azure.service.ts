import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

/**
 * Data para las credenciales de Azure.
 */
interface AzureReaderCredentials {
  /**
   * Token de acceso para el servicio de Azure.
   */
  token: string;

  /**
   * Subdominio de Azure.
   */
  subdomain: string;
}

/**
 * Servicio que otorga conexiones y funcionalidades de Azure para la aplicación.
 */
@Injectable({
  providedIn: 'root',
})
export class AzureService {
  /** @ignore */
  private _token: string = '';

  /** @ignore */
  private _subdomain: string = '';

  constructor(private http: HttpClient) {}

  /**
   * Retorna el valor del token.
   */
  get token() {
    return this._token;
  }

  /**
   * Retorna el valor del subdominio de Azure.
   */
  get subdomain() {
    return this._subdomain;
  }

  /**
   * Establece el valor del token para Azure.
   */
  set token(token: string) {
    this._token = token;
  }

  /**
   * Establece el valor del subdominio de Azure.
   */
  set subdomain(subdomain: string) {
    this._subdomain = subdomain;
  }

  /**
   * Realiza una petición a Azure para obtener el token y subdominio donde está almacenado
   * el inmmersive reader.
   * @returns An observable of type AzureReaderCredentials
   */
  getTokenAndSubdomain(): Observable<AzureReaderCredentials> {
    const params = new HttpParams().set('code', environment.azureApiCode);
    const url = `${environment.azureAPI_URL}/api/GetTokenAndSubdomain`;

    return this.http.get<AzureReaderCredentials>(url, { params }).pipe(
      tap(({ token, subdomain }) => {
        this.token = token;
        this.subdomain = subdomain;
      })
    );
  }
}
