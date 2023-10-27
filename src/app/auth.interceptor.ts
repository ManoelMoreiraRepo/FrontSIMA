import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(
        (event) => {
          // Si la respuesta es un HttpResponse exitoso, puedes manejarlo aquí si es necesario.
          if (event instanceof HttpResponse) {
            // Puedes agregar lógica adicional para respuestas exitosas.
          }
        },
        (error) => {
          this.router.navigate(['/login']);
          // if (error instanceof HttpErrorResponse && error.status === 401) {
          //   // Redirige a la página de inicio de sesión en caso de respuesta 401.
           
          // }
        }
      )
    );
  }
}
