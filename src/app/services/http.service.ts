import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  uploadFile(file: File): Observable<{message: string}> {
    return this._httpClient.get<{message: string}>('http://localhost:3000/file-saver');
  }
}
