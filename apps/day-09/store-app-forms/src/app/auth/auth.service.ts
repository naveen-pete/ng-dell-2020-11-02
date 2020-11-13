import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { AuthData } from './auth-data.model';
import { AuthResponseData } from './auth-response-data.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
        })
      );
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<Error> {
    const error = new Error('An unknown error occurred.');

    return throwError(error);
  }

  private handleAuthToken(authResponseData: AuthResponseData) { }

}