import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;
    const isApiUrl = url.startsWith(environment.api_root);
    if (isApiUrl) {
      console.log(request);
      return handleRoute();

      function handleRoute() {
        switch (true) {
          case url.startsWith(
            environment.api_root + '/bkk/stations-for-location/'
          ) && method === 'GET':
            return StationsForLocation();
          case url.startsWith(
            environment.api_root + '/bkk/departures-for-stops/'
          ) && method === 'GET':
            return DeparturesForStops();
          default:
            // pass through any requests not handled above
            return next.handle(request);
        }
      }
    } else {
      return next.handle(request);
    }

    function StationsForLocation() {
      return ok('fake');
    }

    function DeparturesForStops() {
      return ok('fake');
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }
  }
}
