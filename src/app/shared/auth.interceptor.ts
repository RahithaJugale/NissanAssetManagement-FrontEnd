import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("Intercepting here");

    //bypass login
    if(request.url.substring(-5,5) != 'login'){
      //check jwt
      let token = localStorage.getItem('ACCESS_TOKEN');

      if(localStorage.getItem('EMAIL') && (localStorage.getItem('ACCESS_TOKEN'))){
        const newRequest = request.clone(
          {
            setHeaders: {
              Authorization: `${token}`
            }
            
          }
        );
        console.log(newRequest);
        return next.handle(newRequest);
      }
    }
    return next.handle(request);
  }
}
