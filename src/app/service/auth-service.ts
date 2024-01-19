import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private role: string | null = '';
    private username: string | null = '';
    URL = `${this.environment.URL_API}/auth/`;
    constructor(private http: HttpClient, private router: Router, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
        this.role = localStorage.getItem('userRole') || null;
    }


    login = async (username: string, password: string) => {
        this.setUsername(username);
        const credentials = { username, password };
        try {
          const response = await this.http
            .post(this.URL + `signin`, credentials, { observe: 'response', withCredentials: false })
            .toPromise();
      
      
          return response;
        } catch (error : any) {
          if (error.status === 401) {
            this.mensajero.error("Usuario o contraseña incorrecto.");
          }
          throw error;
        }
      };
      

      procesarUsuario = async (username: string, password: string) => {
        try {
          const loginResponse = await this.login(username, password);
      
          const response : any = await this.http
            .get(this.URL + `role`, { withCredentials: true })
            .toPromise();
      
          console.log(response);
      
          if (response != undefined  && response.role != null) {
            this.setRole(response.role);
            localStorage.setItem('userRole', response.role);
          }
      
          if (response.role) {
            this.redireccionMain();
          }
        } catch (error : any) {
          if (error.status === 401) {
            // this.mensajero.error("Ocurrió un error.");
          }
        }
      };
      


    redireccionMain() {
        if (this.getRole() === 'ROLE_USER') {
            this.router.navigate(['/empleadomain']);
        } else if (this.getRole() === 'ROLE_ADMIN' || this.getRole() === 'ROLE_MODERATOR') {
            this.router.navigate(['/adminmain']);
        }
    }

    isUserLoggedIn(): boolean {
        return this.role != null;
    }

    logout () {
        this.username = null;
        this.role = null;
        localStorage.removeItem('userRole');
        this.http.post(this.URL + `signout`,{},  { observe: 'response', withCredentials: false, })
            .pipe(
                catchError((error) => {
                    return throwError(error);
                })
            )
            .subscribe((response:  HttpResponse<any>) => {
                console.log(response);
                // this.router.navigate(['/adminmain']);
                // this.mensajero.success("Bienvenido.");
            });
    }
    setRole(role: string) {
        this.role = role;
    }

    getRole(): any {
        return this.role;
    }

    isModerador(){
      return this.getRole() === 'ROLE_MODERATOR';
    }

    // getRoleActual = async () => {
    //     if (this.getRole() == '') {
    //         return await this.procesarUsuario();
    //     } else {
    //         return this.getRole();
    //     }

    // }

    setUsername(username: string) {
        this.username = username;
    }

    getUsername(): any {
        return this.username;
    }
}
