import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token = localStorage.getItem("newsToken")
    if(token){
      request = request.clone({
        headers: request.headers.set("Authorization", token)
      })
    }
    return next.handle(request);
  }
}
