import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  login(loginCreds: { user: string, password: string}): Observable<boolean> {
    const { user, password } = loginCreds;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(`${environment.authUrl}`, { user, password }, { headers }).pipe(
      map(() => true),
      catchError(() => {
        return throwError(false);
      })
    );
  }
}
