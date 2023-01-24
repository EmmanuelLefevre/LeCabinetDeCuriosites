import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { SpinnerService } from '../spinner.service';


@Injectable({
  providedIn: 'root'
})

export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.spinnerService.show();

    return next.handle(req)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hide();
        }
      }, (_error) => {
        this.spinnerService.hide();
      }));
  }
}

export const CustomHttpInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: CustomHttpInterceptor,
  multi: true
}
