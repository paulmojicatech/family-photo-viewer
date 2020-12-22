import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppStateService } from './app-state.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient, private _appState: AppStateService) { }

  login(loginCreds: { user: string, password: string}): Observable<boolean> {
    const { user, password } = loginCreds;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._httpClient.post(`${environment.authUrl}`, { user, password }, { headers }).pipe(
      map(() => {
        this._appState.setIsAuthenticated(true);
        return true;
      }),
      catchError(() => {
        this._appState.setIsAuthenticated(false);
        return throwError(false);
      })
    );
  }
}
