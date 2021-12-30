import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

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

  getTokenAndSubdomain() {
    // TODO: Refactorizar la url
    // Si no hay nada en url o está incompleta, es debido a la refactorización jeje
    const url =
      'https://fisiniusimmersivereaderfunctions.azurewebsites.net/api/GetTokenAndSubdomain?code=';

    return this.http.get<AzureReaderCredentials>(url).pipe(
      tap(({ token, subdomain }) => {
        this.token = token;
        this.subdomain = subdomain;
      })
    );
  }
}
