import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse  } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { rutasAdmin,rutasUser } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string = '';
  private username: string = '';
  URL = 'http://localhost:8080/auth/';
  constructor(private http: HttpClient , private cookieService: CookieService , private router: Router ,private mensajero : ToastrService) {
    this.role = localStorage.getItem('userRole') || '';
  }


  login(username: string, password: string) {
    this.setUsername(username);
    const credentials = { username, password };
    this.http.post(this.URL + `signin`, credentials , { observe: 'response' , withCredentials: true, })
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.mensajero.error("Usuario o contraseña incorrecto.");
          }
          return throwError(error);
        })
      )
      .subscribe((response: HttpResponse<any>) => {
         console.log(response);
        // this.router.navigate(['/adminmain']);
        // this.mensajero.success("Bienvenido.");
      });
    }

    procesarUsuario = async()=>{
        this.http.get(this.URL + `role` , { withCredentials: true, })
          .pipe(
            catchError((error) => {
              if (error.status === 401) {
                this.mensajero.error("Usuario o contraseña incorrecto.");
              }
              return throwError(error);
            })
          )
          .subscribe((response:any) => {
            console.log(response);
            if(response.role!=null){
                this.setRole(response.role)
                localStorage.setItem('userRole', response.role);
            }

            if(this.getRole() === 'ROLE_USER'){
                this.router.navigate(['/empleadomain']);
            }else if(this.getRole() === 'ROLE_ADMIN' || this.getRole() === 'ROLE_MODERATOR' ){
                this.router.navigate(['/adminmain']);
            }

            // this.router.navigate(['/adminmain']);
            this.mensajero.success("Bienvenido.");
          });
        }
    

  verificarRuta(ruta:string){
        if(this.getRole() === 'ROLE_USER'){
            if(!rutasUser.includes(ruta)){
                this.router.navigate(['/empleadomain']);
            }
        }else if(this.getRole() === 'ROLE_ADMIN' || this.getRole() === 'ROLE_MODERATOR' ){
            if(rutasAdmin.includes(ruta)){
                this.router.navigate(['/adminmain']);
            }
        }
    }

    isUserLoggedIn(): boolean {
        return this.role != null;
      }
  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
    return this.role;
  }

  getRoleActual = async () => {
    if(this.getRole() == ''){
        return await this.procesarUsuario();
    }else{
        return this.getRole();
    }

  }

  setUsername(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }
}
