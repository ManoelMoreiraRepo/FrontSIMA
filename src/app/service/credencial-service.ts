import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse , HttpParams , HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CredencialService {
    URL = 'http://localhost:8080/Credencial/';
    
    constructor(private httpClient: HttpClient, private mensajero: ToastrService) {
    }

    public getCantidades(jurisdiccion: string, gerencia: string, tipo: string) : Observable<any> {
        const data = {
          "jurisdiccion": jurisdiccion,
          "gerencia": gerencia,
          "tipo": tipo
        };
      
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
          withCredentials: true
        };
      
        return this.httpClient.post(this.URL + "cantidad", JSON.stringify(data) , httpOptions);
      }
}   