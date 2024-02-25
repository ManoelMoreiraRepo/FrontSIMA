import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { inHabilitarBoton, HabilitarBoton , inHabilitarBotonPorSegundos} from 'src/app/utils';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    inHabilitarBoton = inHabilitarBoton;
    HabilitarBoton = HabilitarBoton;
    inHabilitarBotonPorSegundos = inHabilitarBotonPorSegundos
    private role: string | null = '';
    private username: string | null = '';
    URL = `${this.environment.URL_API}/auth/`;
    constructor(private http: HttpClient, private router: Router, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
        this.role = localStorage.getItem('userRole') || null;
    }
    login = async (username: string, password: string , idBoton:string) => {
        inHabilitarBoton(idBoton);
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

      public sendEmail(cuenta: { nombre: string; apellido: string; dni: string; email: string; }):Observable<any> {
        return this.http.post(this.URL + 'sendEmail' , cuenta ,{ observe: 'response', withCredentials: false });
      }
      

      procesarUsuario = async (username: string, password: string, idBoton:string) => {
        try {

          const loginResponse = await this.login(username, password, idBoton);
      
          const response : any = await this.http
            .get(this.URL + `role`, { withCredentials: true })
            .toPromise();
      
          // console.log(response);
      
          if (response != undefined  && response.role != null) {
            this.setRole(response.role);
            localStorage.setItem('userRole', response.role);
          }
          HabilitarBoton(idBoton);
          if (response.role) {
            this.redireccionMain();
          }
        } catch (error : any) {
          HabilitarBoton(idBoton);
             this.mensajero.error("Usuario o contraseña incorrecta.");
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
                // console.log(response);
            });
    }
    setRole(role: string) {
        this.role = role;
    }

    getRole(): any {
        return this.role;
    }

    isModeradorORAdmin(){
      return this.getRole() === 'ROLE_MODERATOR' || this.getRole() === 'ROLE_ADMIN';
    }

    isAdmin() {
      return this.getRole() === 'ROLE_ADMIN';
    }
    isModerador() {
      return this.getRole() === 'ROLE_MODERATOR';
    }

    setUsername(username: string) {
        this.username = username;
    }

    getUsername(): any {
        return this.username;
    }
}
