import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Requête :', req.urlWithParams);
    const start = new Date().getTime();
    console.log('Start :', start);

    return next.handle(req).pipe(
      tap((response) => {
        if (response instanceof HttpResponse) {
          const end = new Date().getTime();
          const elapsed = end - start;
          console.log('End :', end);
          console.log('Elapsed :', elapsed);
        }
      })
    );
  }
}
