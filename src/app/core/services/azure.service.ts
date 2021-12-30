import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface AzureReaderCredentials {
  token: string;
  subdomain: string;
}

@Injectable({
  providedIn: 'root',
})
export class AzureService {
  private _token: string = '';
  private _subdomain: string = '';

  constructor(private http: HttpClient) {}

  get token() {
    return this._token;
  }

  get subdomain() {
    return this._subdomain;
  }

  set token(token: string) {
    this._token = token;
  }

  set subdomain(subdomain: string) {
    this._subdomain = subdomain;
  }

  /**
   * Realiza una petición a Azure para obtener el token y subdominio donde está almacenado
   * el inmmersive reader.
   * @returns An observable of type AzureReaderCredentials
   */
  getTokenAndSubdomain() {
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
