import { Injectable } from '@angular/core';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { IAppState } from '../models/state/state.interface';
@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  readonly INITIAL_STATE: IAppState = {
    isAuthenticated: false
  }

  private _currentState = new BehaviorSubject<IAppState>(this.INITIAL_STATE);
  currentState$ = this._currentState.asObservable();

  constructor() { }

  getCurrentState(): Observable<IAppState> {
    return this.currentState$;
  }

  setIsAuthenticated(isAuthenticated: boolean): void {
    this._currentState.next({
      ...this._currentState.getValue(),
      isAuthenticated
    });
  }
}
