import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse , HttpParams , HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { URL_API } from '../constantes';

@Injectable({
    providedIn: 'root'
})
export class CredencialService {
    URL = `${URL_API}/Credencial/`;
    constructor(private httpClient: HttpClient, private mensajero: ToastrService) {
    }

    public getCantidades() : Observable<any> {
       
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          withCredentials: true
        };
      
        return this.httpClient.get(this.URL + "cantidad", httpOptions);
      }
}   