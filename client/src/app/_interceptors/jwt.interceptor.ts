/*
import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpInterceptorFn 
} from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable()

export class jwtInterceptor implements HttpInterceptor{

    constructor(private accountService: AccountService){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {        
      this.accountService.currentUser$.pipe(take(1)).subscribe({
        next: user => {
          if (user)
            request = request.clone({
              setHeaders: {
                Authorization: `Bearer ${user.token}`
              }
            }) 
        }
      })

      return next.handle(request);
    }
 
 // export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
 //   return next(req);
 // };

}
*/

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { take } from 'rxjs';
 
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountService = inject(AccountService);
 
  accountService.currentUser$.pipe(take(1)).subscribe({
    next: (user) => {
      if (user) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${user.token}`
          }
        });
      }
    }
  });
 
  return next(req);
};