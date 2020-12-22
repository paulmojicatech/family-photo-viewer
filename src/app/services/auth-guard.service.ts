import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _stateSvc: AppStateService, private _router: Router) { }

  canActivate(): Observable<boolean> {
    const auth$ = this._stateSvc.getCurrentState().pipe(
      map(currentState => currentState.isAuthenticated),
      tap(isAuthenticated => {
        if (!isAuthenticated) {
          this._router.navigate(['']);
        }
      })
    );
    auth$.subscribe().unsubscribe();
    return auth$;
  }

}
