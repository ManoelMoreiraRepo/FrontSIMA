import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router , private mensajero : ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        withCredentials: true
      });


    return next.handle(request).pipe(
      tap(
        (event) => {
          // Si la respuesta es un HttpResponse exitoso, puedes manejarlo aquí si es necesario.
          if (event instanceof HttpResponse) {
            // Puedes agregar lógica adicional para respuestas exitosas.
          }
        },
        (error) => {
          
          if (error instanceof HttpErrorResponse && error.status === 401) {
             this.router.navigate(['/login']);
          }else{
            this.mensajero.error("Ocurrio un error.");
           // alert(JSON.stringify(error));
            console.log(error);
          }
        }
      )
    );
  }
}
