import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showLoading: boolean = false;

  constructor(private _formBuilder: FormBuilder, private _httpService: HttpService, private _router: Router) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      loginId: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  login(): void {
    const user = this.loginForm.get('loginId').value;
    const password = this.loginForm.get('password').value;
    this.showLoading = true;
    this._httpService.login({ user, password }).pipe(
      catchError(err => {
        alert('You do not have permissions to enter.');
        this.showLoading = false;
        return of(false);
      })
    ).subscribe(isAuthenticated => {
      this.showLoading = false;
      if (!!isAuthenticated) {
        this._router.navigate(['home']);
      }
    });
    
  }

}
