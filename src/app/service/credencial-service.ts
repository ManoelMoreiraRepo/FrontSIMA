import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse , HttpParams , HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CredencialService {
    URL = `${this.environment.URL_API}/Credencial/`;
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true
    };
    constructor(private httpClient: HttpClient, private mensajero: ToastrService , @Inject('ENVIRONMENT') private environment: any) {
    }

    public getCantidades() : Observable<any> {
        return this.httpClient.get(this.URL + "cantidad", this.httpOptions);
    }

    public getCredecialesDTO(id:string) : Observable<any>{
      return this.httpClient.get(this.URL + `credencialesDTO/${id}` , {withCredentials:true});
    }
}   