import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    constructor(private http: HttpClient, private mensajero: ToastrService, @Inject('ENVIRONMENT') private environment: any) {
    }

    URL = `${this.environment.URL_API}/Usuario/`;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        withCredentials: true
    };

    public getUsuarios(): Observable<any> {
        return this.http.get(this.URL + "mostrar" , this.httpOptions);
    }

    public getUsuario(id : any): Observable<any> {
        return this.http.get(this.URL + `traer/${id}` , this.httpOptions);
    }

    public guardarUsuario(obj:any){
        return this.http.put(this.URL + 'update', obj , this.httpOptions);
    }
}

