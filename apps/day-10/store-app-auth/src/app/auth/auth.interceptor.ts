import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authService.user.pipe(
      take(1),
      switchMap(user => {
        if (!user) {
          return next.handle(request);
        }

        const modifiedRequest = request.clone({
          params: new HttpParams().set('auth', user.token),
          // headers: new HttpHeaders().set('x-auth', 'Bearer auth-token')
        });
        return next.handle(modifiedRequest);
      })
    );
  }
}

// subject, observable, behaviorsubject
// - subscribe()
// - pipe()
