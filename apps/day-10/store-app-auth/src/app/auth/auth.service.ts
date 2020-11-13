import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthData } from './auth-data.model';
import { AuthResponseData } from './auth-response-data.model';
import { environment } from '../../environments/environment';
import { User } from './user.model';

const TOKEN_EXPIRATION_TIME_IN_SEC = 600;  // 10 minutes

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signUp(authData: AuthData) {
    return this.http.post<AuthResponseData>(`${environment.authApiUrl}:signUp?key=${environment.firebaseApiKey}`, authData)
      .pipe(
        catchError(this.handleError),
        tap((authResponseData: AuthResponseData) => {
          this.handleAuthToken(authResponseData);
        }),
      );
  }

  login(authData: AuthData) {
    return this.http.post<AuthResponseData>(`${environment.authApiUrl}:signInWithPassword?key=${environment.firebaseApiKey}`, authData)
      .pipe(
        catchError(this.handleError),
        tap((authResponseData: AuthResponseData) => {
          this.handleAuthToken(authResponseData);
        })
      );
  }

  private handleAuthToken(authResponseData: AuthResponseData) {
    // Destructuring assignment (Object)
    const { localId, email, idToken, expiresIn } = authResponseData;

    const expiresInMS =
      (expiresIn ? parseInt(expiresIn) : TOKEN_EXPIRATION_TIME_IN_SEC) * 1000;
    const tokenExpiryDate = new Date(Date.now() + expiresInMS);

    const authenticatedUser = new User(localId, email, idToken, tokenExpiryDate);
    this.user = authenticatedUser;
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<Error> {
    const error = new Error('An unknown error occurred.');

    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(error);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':            // signup error
        error.message = 'The email address is already in use by another account.';
        break;

      case 'EMAIL_NOT_FOUND':         // signup error
        error.message = 'There is no user record corresponding to this email.';
        break;

      case 'INVALID_PASSWORD':        // login error
        error.message = 'The password is invalid or the user does not have a password.';
        break;

      case 'OPERATION_NOT_ALLOWED':   // login error
        error.message = 'Password sign-in is disabled.';
        break;

      case 'USER_DISABLED':
        error.message = 'The user account has been disabled by an administrator.'
        break;
    }

    return throwError(error);
  }

}